Gets real-time orientation data from this library https://github.com/ZaneL/Teensy-ICM-20948 over a serial port and rotates a 3D object accordingly.

Video demo:
https://streamable.com/ivmgfz

![alt text](https://i.ibb.co/VVMfQk9/image.png)
![alt text](https://i.ibb.co/SmM00g1/image.png)

After cloning this library, open **index.js** and change the serial port to the correct port. You also might need to edit **index.html** to swap the quaternion values around if things aren't rotating in the correct direction.

Then install the required packages:

      npm install
      
Run the app:

      node index.js
      
Open your web browser:

      http://localhost:3000/
      
    
