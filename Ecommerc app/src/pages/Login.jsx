
// import React, { useState } from 'react';

// const AuthForm = () => {
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Login
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = () => {
//     // If it's SignUp, ensure name is entered
//     if (isSignUp && !name) {
//       setPopupMessage('Please fill out the name field');
//       setShowPopup(true);
//       return;
//     }

//     // Check if fields are filled
//     if (!email || !password) {
//       setPopupMessage('Please fill out all required fields');
//       setShowPopup(true);
//       return;
//     }

//     // If user is trying to log in but hasn't signed up yet
//     if (!isSignUp && !localStorage.getItem('user')) {
//       setPopupMessage('Please sign up first');
//       setShowPopup(true);
//       return;
//     }

//     // Handle Login/SignUp success
//     if (isSignUp) {
//       localStorage.setItem('user', JSON.stringify({ email, name }));
//       setPopupMessage('Signed up successfully!');
//     } else {
//       setPopupMessage('Logged in successfully!');
//     }

//     // Clear input fields after successful login/signup
//     setEmail('');
//     setPassword('');
//     setName('');

//     setShowPopup(true);

//     // Hide the popup after 3 seconds
//     setTimeout(() => setShowPopup(false), 3000);
//   };

//   return (
//     <div className="relative max-w-md mx-auto mt-14">
//       <form className="flex flex-col items-center gap-4 text-black">
//         <div className="text-center mb-4">
//           <h2 className="text-3xl font-semibold">{isSignUp ? 'Sign Up' : 'Login'}</h2>
//         </div>

//         {isSignUp && (
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-800"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         )}

//         <input
//           type="email"
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <div className="w-full flex justify-between text-sm mt-2">
//           <p className="cursor-pointer">Forgot your password?</p>
//           <p
//             onClick={() => setIsSignUp(!isSignUp)}
//             className="cursor-pointer text-blue-500">
//             {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={handleSubmit}
//           className="bg-black text-white font-light px-8 py-2 mt-4">
//           {isSignUp ? 'Sign Up' : 'Login'}
//         </button>
//       </form>

//       {/* Popup Message */}
//       {showPopup && (
//         <div className="absolute top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthForm;


import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler}  className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none w-8 h-[1.5px] bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800'placeholder='Name' required /> }  
      <input type="email" className='w-full px-3 py-2 border border-gray-800'placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800'placeholder='Password' required />
      <div className='w-full flex justify-between text-sm '>
        <p className=' text-sm text-blue-600 cursor-pointer'>Forgot your password?</p>
        {
          currentState ===  'Login'
          ? <p onClick={()=>setCurrentState('Sing up')} className='cursor-pointer' >Create account</p> 
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer' >Login Here</p>
        }
      </div>
      <button className='bg-black text-white  font-light px-8 py-2 mt-4 '>{currentState === 'Login' ? 'Sing in' : 'sing Up'}</button>
    </form>
  )
}

export default Login
