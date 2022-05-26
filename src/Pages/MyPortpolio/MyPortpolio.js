import React from 'react';
import { Link } from 'react-router-dom';

const MyPortpolio = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-16 my-8 gap-8">
        <div className="shadow-2xl p-10 rounded-lg flex justify-center items-center">
          <div>
            <h1 className="font-medium text-left pb-2">Name : <span className="text-xl font-bold text-accent">Aonik Paul Alock</span></h1>
            <h1 className="font-medium text-left pb-2">Email : <span className="text-xl font-bold text-accent">alockpaul9845@gmail.com</span></h1>
            <h1 className="font-medium text-left pb-2">Educational Background : <span className="text-xl font-bold text-accent">Honours 2nd Year</span></h1>
            <h1 className="font-medium text-left pb-2">Department : <span className="text-xl font-bold text-accent">Economic</span></h1>
          </div>
        </div>
        <div className="shadow-2xl p-10 rounded-lg flex justify-center items-center">
          <div>
            <h1 className='font-bold text-2xl text-accent pb-2'>Skills : </h1>
            <h1 className="font-bold text-accent">HTML  ||  CSS   ||  Tailwind  || Boostarp </h1>
            <h1 className="font-bold text-accent py-2">Javascript  ||  React  ||  Firebase  </h1>
            <h1 className="font-bold text-accent">Node  ||  Mongodb  ||  Express  </h1>
            <div>
              <h1 className='font-bold text-2xl text-accent pb-2 mt-4'>My-Projects Link :</h1>
              <h1>
                <a href="https://backend-assiment-11.firebaseapp.com/" className="font-bold text-green-500 py-2" target="_blank">https://backend-assiment-11.firebaseapp.com/</a>
              </h1>
              <h1>
                <a href="https://final-assiment.web.app/" className="font-bold text-green-500 py-2" target="_blank">https://final-assiment.web.app/</a>
              </h1>
              <h1>
                <a href="https://wedding-photographer-d90bb.firebaseapp.com/" className="font-bold text-green-500 py-2" target="_blank">https://wedding-photographer-d90bb.firebaseapp.com/</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortpolio;