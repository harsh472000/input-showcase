import React from "react";
import { Input } from "multi-input-component";
import { FaEnvelope } from "react-icons/fa";
import "../App.css";

const Form = () => {
  return (
    <>
    <div className="container-one">
        <div>
        <div className="form__title">with variant status error icon clear autoComplete</div>
        <Input
          type="email"
          label="Email"
          variant="normal"
          icon={<FaEnvelope />}
          autoComplete="email"
          characterLimit={10}
          allowClear
          placeholder="Enter your Email"
          id="email"
          onChange={(e) => console.log(e.target.value)}
          helpText="Click the eye icon to show/hide your password"
          status="default"
          error="Please enter valid email"
        />
        </div>
      </div>
    <div className="container">
        
      <div className="form">
        <div className="form__title">Input tag with normal variant</div>
        <Input
          type="email"
          label="Email"
          variant="normal"
          icon={<FaEnvelope />}
          autoComplete="email"
          characterLimit={10}
          placeholder="Enter your Email"
          id="email"
          onChange={(e) => console.log(e.target.value)}
          helpText="Click the eye icon to show/hide your password"
          status="default"
        />
      </div>

      <div className="form">
        <div className="form__title">Input with underlined variant</div>
        <Input
          type="text"
          label="Address"
          id="address"
          variant="underlined"
          placeholder="Input with clear icon"
          allowClear
          status="hover"
        />
      </div>

      <div className="form">
        <div className="form__title">Input with outlined variant</div>
        <Input
          type="text"
          label="Country"
          id="country"
          variant="outlined"
          defaultValue="India"
        />
      </div>

      <div className="form">
        <div className="form__title">Input with floating variant</div>
        <Input type="text" placeholder="floating" variant="floating" />
      </div>

      <div className="form">
        <div className="form__title">Input with rounded variant</div>
        <Input
          type="number"
          label="Mobile Number"
          placeholder="Mobile Number"
          variant="rounded"
        />
      </div>

      <div className="form">
        <div className="form__title">Input with filled variant</div>
        <Input
          type="text"
          label="User Name"
          placeholder="User Name"
          variant="filled"
        />
      </div>

      <div className="form">
        <div className="form__title">Input with hover status</div>
        <Input
          type="text"
          label="first Name"
          placeholder="First Name"
          status="hover"
        />
      </div>

      <div className="form">
        <div className="form__title">Input with disabled status</div>
        <Input
          type="text"
          label="Country"
          id="country"
          defaultValue="India"
          status="disabled"
        />
      </div>

      <div className="form">
        <div className="form__title">Input with readOnly status</div>
        <Input
          type="text"
          label="Country"
          id="country"
          defaultValue="India"
          status="readOnly"
        />
      </div>
      <div className="form">
        <div className="form__title">Input with error status</div>
        <Input
          type="text"
          label="Country"
          id="country"
          defaultValue="India"
          status="error"
        />
      </div>
      <div className="form">
        <div className="form__title">Input with success status</div>
        <Input
          type="text"
          label="Country"
          id="country"
          defaultValue="India"
          status="success"
        />
      </div>

      <div className="form">
        <div className="form__title">Input tag with icon</div>
        <Input
          type="email"
          label="Email"
          variant="normal"
          icon={<FaEnvelope />}
          placeholder="Enter your Email"
          id="email"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div className="form">
        <div className="form__title">Input tag with Clear button</div>
        <Input
          type="text"
          label="Address"
          id="address"
          placeholder="Input with clear icon"
          allowClear
          status="hover"
        />
      </div>

      <div className="form">
        <div className="form__title">Input tag error message</div>
        <Input
          type="email"
          label="Email"
          variant="normal"
          icon={<FaEnvelope />}
          placeholder="Enter your Email"
          id="email"
          onChange={(e) => console.log(e.target.value)}
          error="Please enter valid add"
        />
      </div>

      <div className="form">
        <div className="form__title">Input tag error message</div>

        <Input label="Currency" prefix="￥" suffix="RMB" />
      </div>

      <div className="form">
        <div className="form__title">
          Input tag password toggle with autoComplete
        </div>
        <Input
          type="password"
          label="Password"
          id="password"
          variant="rounded"
          placeholder="Enter you password"
          autoComplete
        />
      </div>

      <div className="form">
        <div className="form__title">Input tag Character Count</div>
        <Input
          type="password"
          label="Password"
          id="password"
          variant="rounded"
          placeholder="Enter you password"
          characterLimit={12}
        />
      </div>

      <div className="form">
        <div className="form__title">Date Input </div>
        <Input
          type="date"
          label="Joining Date"
          placeholder="Joining Date"
        />
      </div>

      <div className="form">
        <div className="form__title">Time Input </div>
        <Input
          type="time"
          label="Start Time"
          placeholder="start Time"
        />
      </div>

      <div className="form">
        <div className="form__title">DateTime Input </div>
        <Input
          type="datetime-local"
          label="Date Time"
          placeholder="start Time"
        />
      </div>

      <div className="form">
        <div className="form__title">Month Input</div>
        <Input
          type="month"
          label="Month"
          placeholder="start Time"
        />
      </div>

      <div className="form">
        <div className="form__title">Telephone Input</div>
        <Input
          type="tel"
          label="Telephone"
          placeholder="98798 98798"
        />
      </div>

      <div className="form">
        <div className="form__title">Upload Input</div>
        <Input
          type="file"
          label="Upload"
          placeholder="upload"
        />
      </div>

    </div>

    </>
  );
};

export default Form;
