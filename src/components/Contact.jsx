import React, { useRef, useState, useEffect } from 'react';
import { CgMail } from 'react-icons/cg';
import { TbPhoneRinging } from 'react-icons/tb';
import { SlLocationPin } from 'react-icons/sl';
import emailjs from '@emailjs/browser';
import Aos from 'aos';

function Contact() {
  const form = useRef();
  const [isSent, setSentStatus] = useState(false);
  const [sendError, setSendError] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name) {
      newErrors.name = 'Name is required';
    }

    if (!formState.subject) {
      newErrors.subject = 'Subject is required';
    }

    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formState.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSentStatus(false);
    setSendError('');

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_USER_ID
      )
      .then(() => {
        setSentStatus(true);
        setFormState({
          name: '',
          subject: '',
          email: '',
          message: '',
        });
        setTimeout(() => {
          setSentStatus(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        setSendError('Failed to send the message. Please try again.');
      });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div id="contact" className="flex bg-[#021636] items-center justify-center overflow-hidden py-25">
      <div className="bg-[#1B2D4D] px-20 max-w-screen-xl flex flex-col gap-4 items-center py-10">
        <h4 className="text-[#E64154] text-2xl">Contact Me Today</h4>
        <h1 className="w-100 text-white hidden lg:block text-2xl button text-center">
          Reach Out To Me With Your Inquiry Now
        </h1>
        <div className="flex flex-col-reverse lg:flex-row w-full">
          <div className="flex gap-2 m-4 flex-col outline-2 outline-[#ffffff3d] p-4">
            <div className="flex gap-3">
              <div className="bg-[#E94157] p-4 rounded-sm">
                <CgMail className="h-6 w-auto text-white" aria-label="Email Icon" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-md font-bold text-white">Email</h1>
                <p className="text-white text-md">yaikobzeray@gmail.com</p>
              </div>
            </div>
            <hr className="text-[#ffffff7f] border-1 m-2" />
            <div className="flex gap-3">
              <div className="bg-[#E94157] p-4 rounded-sm">
                <TbPhoneRinging className="h-6 w-auto text-white" aria-label="Phone Icon" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-md font-bold text-white">Contact</h1>
                <p className="text-[#FFFFFF] text-md py-1">+251905221804</p>
              </div>
            </div>
            <hr className="text-[#ffffff7f] border-1 m-2" />
            <div className="flex gap-3">
              <div className="bg-[#E94157] p-4 rounded-sm">
                <SlLocationPin className="h-6 w-auto text-white" aria-label="Location Icon" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-md font-bold text-white">Location</h1>
                <p className="text-white text-md py-1">Addis Ababa,Eth</p>
              </div>
            </div>
          </div>

          <form ref={form} className="flex flex-col p-4 gap-4" onSubmit={sendEmail}>
            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="p-2 w-full outline-2 outline-[#ffffff3d] text-[#FFF]"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="p-2 w-full outline-2 outline-[#ffffff3d] text-[#FFF]"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="p-2 w-full outline-2 h-10 outline-[#ffffff3d] text-[#FFF]"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="flex flex-col">
              <textarea
                rows={4}
                placeholder="Type your message here ...."
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="p-2 w-90 lg:w-140 outline-2 outline-[#ffffff3d] text-[#FFF]"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <input
              type="submit"
              value="Send"
              className="px-10 py-2 w-full bg-[#E94157] text-[#FFF7F3]"
            />
          </form>
          {isSent && (
            <div className="w-64 flex justify-center">
              <p className="mt-4 text-[#00a148]">Message sent successfully!</p>
            </div>
          )}
          {sendError && <p className="text-red-500 mt-4">{sendError}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;