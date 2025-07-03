import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const submitFunc = (e) => {
    e.preventDefault();
    setErr('');

    if (!email.trim().includes('@')) {
      setErr('Please enter a valid email');
      return;
    }

    if (pass.trim().length < 6) {
      setErr('Password must be at least 6 characters');
      return;
    }

    alert(`Email: ${email} \nPassword: ${pass}`);
  };

  return (
    <div className='flex bg-[skyblue] lg:w-[70vh] border-2 border-black py-6 flex-col font-bold gap-4 rounded-lg'>
      <div className='mx-4 flex justify-center text-xl'>Sign In</div>
      <form onSubmit={submitFunc} className='flex-col flex gap-2'>
        <label htmlFor='email' className='mx-4'>
          Email
        </label>
        <input
          type='email'
          required
          name='email'
          className='mx-4 border-2 border-black text-[0.8em] px-2 py-1'
          placeholder='Email ID'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password' className='mx-4'>
          Password
        </label>
        <input
          type='password'
          required
          name='password'
          className='mx-4 border-2 border-black text-[0.8em] px-2 py-1'
          placeholder='Password'
          onChange={(e) => setPass(e.target.value)}
        />
        <button type='submit' className='bg-[tomato] text-white w-1/4 m-auto py-1 rounded'>
          Sign In
        </button>
        {err && (
          <p className='flex justify-center w-full text-[0.8em] text-red-600'>{err}</p>
        )}
      </form>
    </div>
  );
};

export default Signup;
