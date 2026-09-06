import React from 'react'
import { googleLogo, githubLogo } from '../assets'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../redux/bazarSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  const handleGoogleLogin = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        )
        setTimeout(() => {
          navigate('/')
        }, 1000)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        toast.success('Log Out Successfully!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <section className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='mx-auto grid max-w-screen-lg gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className='surface p-6 sm:p-8'>
          <span className='section-badge'>Welcome back</span>
          <h1 className='mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>Sign in with a smoother, cleaner flow.</h1>
          <p className='mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base'>
            Use your preferred provider to keep your account in sync and move through checkout faster.
          </p>

          <div className='mt-8 space-y-4'>
            <button onClick={handleGoogleLogin} className='surface-soft flex w-full items-center gap-3 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg'>
              <img src={googleLogo} alt='googleLogo' className='h-9 w-9 shrink-0' />
              <div className='min-w-0 flex-1'>
                <p className='text-sm font-semibold text-slate-900'>Continue with Google</p>
                <p className='text-xs text-slate-500'>Fast sign in for your shopping account.</p>
              </div>
            </button>

            <div className='surface-soft flex w-full items-center gap-3 px-4 py-4 text-left'>
              <img src={githubLogo} alt='githubLogo' className='h-9 w-9 shrink-0' />
              <div className='min-w-0 flex-1'>
                <p className='text-sm font-semibold text-slate-900'>Continue with GitHub</p>
                <p className='text-xs text-slate-500'>Available in the interface, ready for future provider wiring.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='surface flex flex-col justify-between gap-6 p-6 sm:p-8'>
          <div>
            <span className='section-badge'>Account controls</span>
            <h2 className='mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl'>Keep your session tidy.</h2>
            <p className='mt-4 text-sm leading-7 text-slate-600 sm:text-base'>
              Sign out whenever you want to switch accounts or refresh the session on a shared device.
            </p>
          </div>

          <button onClick={handleSignOut} className='primary-button w-full sm:w-auto'>
            Sign Out
          </button>
        </div>
      </div>

      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </section>
  )
}

export default Login
