const exchangeMail = (data) => {
  const filterArr = [];
  data.passenger_info.forEach((el) => {
    if (el.value !== "") filterArr.push(el.value);
  });

  return `<div style="font-size: 16px; line-height: 1.5;">
    <div style="text-align: right; padding: 15px; width: 180px; margin-left: auto; ">
       <div style="text-align: center;">
          <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/book_ref.png?alt=media&token=3ef61d81-83b7-4689-900e-32287c4edd7a" alt="Booking Reference" />
          <p style="margin-top: 10px; font-size: 18px;">${
            data.bookingReference
          }</p>
       </div>
    </div>
    <div>
       <h3 style="font-size: 22px; margin: 10px 0 10px;">TFN ${data.tfn}</h3>
       <p style="margin: 15px 0;">Dear ${data.customerName},</p>
       <p style="margin: 15px 0;">Total price including all taxes and fees: <strong>(${
         data.totalPrice
       })</strong>.</p>
       <p><strong>Please Note: -</strong> As per our conversation and as agreed, we have changed your reservation under confirmation <strong>#${
         data.bookingReference
       }</strong>, with price of <strong>${
    data.priceField1
  }</strong> per passenger (Including taxes &amp; fees).</p>
       <p>There will be 2 charge appearing on your card statement of <strong>${
         data.priceField2
       } Tax (${data.airlinesName}) and ${
    data.priceField3
  } fare difference</strong> as <strong>(${data.bookedThrough})</strong>.</p>
       <p>We have changed your reservation as you are paying through ${
         data.paymentMode
       } ending with *******${data.lastDigits}.</p>
       <div style="padding: 20px 30px;">
          <p style="font-weight: 700; margin: 5px 0;">Card details:</p>
          <p style="font-weight: 700; margin: 5px 0;">Card Holder: - ${
            data.cardHolder
          }</p>
          <p style="font-weight: 700; margin: 5px 0;">Passenger's Name : - ${filterArr.join(
            ", "
          )}</p>
       </div>
       <div style="padding: 0 30px;">
          <p>**********************************************</p>
          <p style="font-weight: 700; margin: 5px 0;">Address: - ${
            data.address
          }</p>
          <p>**********************************************</p>
       </div>
       <div style="padding: 0 30px;">
          <p style="font-weight: 700; margin: 5px 0;">Itinerary: -</p>
          <img src="${
            data.itinerary_url
          }" alt="Itinerary" style="margin: 10px 0; max-width: 100%;" />
          <p style="margin: 15px 0;">**********************************************</p>
       </div>
       <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/imp_info.png?alt=media&token=fb704270-6486-4cb3-a21f-35ed0269fb7d" alt="Important Information" />
          <ul style="margin: 10px 0; padding: 0 0 0 16px;">
             <li style="margin: 10px 0;">Date and routing changes will be subject to Airline Penalty and Fare Difference if any.</li>
             <li style="margin: 10px 0;">Fares are not guaranteed until ticketed. Your Booking is confirmed through <strong>${
               data.bookedThrough
             }</strong>.</li>
             <li style="margin: 10px 0;"><strong>Cancellation Policy:-</strong> Tickets are Non-Refundable/Non-Transferable and Name changes are not permitted.<br />All customers are advised to verify travel documents (transit visa/entry visa) for the country through which they are transiting and/or entering. <strong>${
               data.bookedThrough
             }</strong> will not be responsible if proper travel documents are not available and you are denied entry or transit into a Country. We request
                you to consult the embassy of the country(s) you are visiting or transiting through.
             </li>
             <li style="margin: 10px 0;">
                <strong>Please Note: -</strong>
                <ul>
                   <li style="margin: 10px 0;">Signing this document, you are accepting all the above mentioned terms and conditions.</li>
                   <li style="margin: 10px 0;">Your credit card maybe billed in multiple charges not exceeding the total amount.</li>
                </ul>
             </li>
          </ul>
       </div>
       <div style="padding: 30px 0 0; line-height: 1;">
          <p style="margin: 5px 0;">Thank you,</p>
          <p style="font-weight: 700; margin: 5px 0;">${data.agentName}</p>
          <p style="font-weight: 700; margin: 5px 0;">Ext.: ${data.agentExt}</p>
       </div>
    </div>
  </div>`;
};

const cancelRefundMail = (data) => {
  const filterArr = [];

  const renderPass = () => {
    let passHtml = "";

    data.passenger_info.forEach((el) => {
      if (el.value !== "") {
        passHtml += `<p style="font-weight: 700; margin: 5px 0;">${el.value}</p>`;
      }
    });

    return passHtml;
  };

  return `<div style="font-size: 16px; line-height: 1.5;">
      <div style="text-align: right; padding: 15px; width: 180px; margin-left: auto; ">
         <div style="text-align: center;">
            <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/book_ref.png?alt=media&token=3ef61d81-83b7-4689-900e-32287c4edd7a" alt="Booking Reference" />
            <p style="margin-top: 10px; font-size: 18px;">${
              data.bookingReference
            }</p>
         </div>
      </div>
      <div>
         <h3 style="font-size: 22px; margin: 10px 0 10px;">TFN ${data.tfn}</h3>
         <p style="margin: 15px 0;">Dear ${data.customerName},</p>
         <p style="margin: 15px 0;">Total price including all taxes and fees: <strong>(${
           data.totalPrice
         })</strong>.</p>
         <p><strong>Please Note: -</strong> As per our conversation and as agreed, we have changed your reservation under confirmation <strong>#${
           data.bookingReference
         }</strong>, with price of <strong>${
    data.priceField1
  }</strong> per passenger (Including taxes &amp; fees).</p>
         <p>There will be 1 charge appearing on your card statement of <strong>${
           data.priceField2
         } Tax (${data.airlinesName})</strong>.</p>
         <p>We have cancelled your reservation as you are paying through ${
           data.paymentMode
         } ending with *******${data.lastDigits}.</p>
         <div style="padding: 20px 30px;">
            <p style="font-weight: 700; margin: 5px 0;">Passenger&#39;s Name:</p>
            ${renderPass()}
         </div>
         <p style="font-weight: 600; margin: 10px 0;">Refund Amount - ${
           data.refundAmt
         }</p>
         <p style="font-weight: 700; margin: 5px 0;">${
           data.refundAmtPrice1
         }  + ${
    data.refundAmtPrice2
  } Taxes And Fees Each Passenger will be charged by the consolidation desk i.e  ${
    data.bookedThrough
  }</p>
         <p style="font-weight: 600;">Note: The refund takes time ,please be patient.</p>
         <p style="font-weight: 600;">A few notes about the airline refund: It takes upto 1-2 billing cycles or more to reflect on your account statement.</p>
         <p>When the refund is processed a refund tracking number is shared with the passengers over the email.</p>
         <p>Please be advised that the refund desk can only be reached at the Customer Care team ${
           data.phoneNumber
         }.</p>
         <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/imp_info.png?alt=media&token=fb704270-6486-4cb3-a21f-35ed0269fb7d" alt="Important Information" />
            <ul style="margin: 10px 0; padding: 0 0 0 16px;">
               <li style="margin: 10px 0;">Date and routing changes will be subject to Airline Penalty and Fare Difference if any.</li>
               <li style="margin: 10px 0;">Fares are not guaranteed until ticketed. Your Booking is confirmed through <strong>${
                 data.bookedThrough
               }</strong>.</li>
               <li style="margin: 10px 0;"><strong>Cancellation Policy:-</strong> Tickets are Non-Refundable/Non-Transferable and Name changes are not permitted.<br />All customers are advised to verify travel documents (transit visa/entry visa) for the country through which they are transiting and/or entering. <strong>${
                 data.bookedThrough
               }</strong> will not be responsible if proper travel documents are not available and you are denied entry or transit into a Country. We request
                  you to consult the embassy of the country(s) you are visiting or transiting through.
               </li>
               <li style="margin: 10px 0;">
                  <strong>Please Note: -</strong>
                  <ul>
                     <li style="margin: 10px 0;">Signing this document, you are accepting all the above mentioned terms and conditions.</li>
                     <li style="margin: 10px 0;">Your credit card maybe billed in multiple charges not exceeding the total amount.</li>
                  </ul>
               </li>
            </ul>
         </div>
         <div style="padding: 30px 0 0; line-height: 1;">
            <p style="margin: 5px 0;">Thank you,</p>
            <p style="font-weight: 700; margin: 5px 0;">${data.agentName}</p>
            <p style="font-weight: 700; margin: 5px 0;">Ext.: ${
              data.agentExt
            }</p>
         </div>
      </div>
    </div>`;
};

const newBookingMail = (data) => {
  const filterArr = [];
  data.passenger_info.forEach((el) => {
    if (el.value !== "") filterArr.push(el.value);
  });

  return `<div style="font-size: 16px; line-height: 1.5;">
      <div style="text-align: right; padding: 15px; width: 180px; margin-left: auto; ">
         <div style="text-align: center;">
            <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/book_ref.png?alt=media&token=3ef61d81-83b7-4689-900e-32287c4edd7a" alt="Booking Reference" />
            <p style="margin-top: 10px; font-size: 18px;">${
              data.bookingReference
            }</p>
         </div>
      </div>
      <div>
         <h3 style="font-size: 22px; margin: 10px 0 10px;">TFN ${data.tfn}</h3>
         <p style="margin: 15px 0;">Dear ${data.customerName},</p>
         <p style="margin: 15px 0;">Total price including all taxes and fees: <strong>(${
           data.totalPrice
         })</strong>.</p>
         <p><strong>Please Note: -</strong> As per our conversation and as agreed, we have booked a new reservation under confirmation <strong>#${
           data.bookingReference
         }</strong>, with price of <strong>${
    data.priceField1
  }</strong> per passenger (Including taxes &amp; fees).</p>
         <p>There will be 2 charge appearing on your card statement of <strong>${
           data.cardStatementCharge1
         } (${data.airlinesName}) and ${
    data.cardStatementCharge2
  }</strong> as <strong>(${data.bookedThrough})</strong>.</p>
         <p>We have booked your reservation as you are paying through ${
           data.paymentMode
         } ending with *******${data.lastDigits}.</p>
         <div style="padding: 20px 30px;">
            <p style="font-weight: 700; margin: 5px 0;">Card details:</p>
            <p style="font-weight: 700; margin: 5px 0;">Card Holder: - ${
              data.cardHolder
            }</p>
            <p style="font-weight: 700; margin: 5px 0;">Card Details: - ${
              data.cardDetails
            }</p>
            <p style="font-weight: 700; margin: 5px 0;">Passenger's Name : - ${filterArr.join(
              ", "
            )}</p>
         </div>
         <div style="padding: 0 30px;">
            <p>**********************************************</p>
            <p style="font-weight: 700; margin: 5px 0;">Address: - ${
              data.address
            }</p>
            <p>**********************************************</p>
         </div>
         <div style="padding: 0 30px;">
            <p style="font-weight: 700; margin: 5px 0;">Itinerary: -</p>
            <img src="${
              data.itinerary_url
            }" alt="Itinerary" style="margin: 10px 0; max-width: 100%;" />
            <p style="margin: 15px 0;">**********************************************</p>
         </div>
         <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/imp_info.png?alt=media&token=fb704270-6486-4cb3-a21f-35ed0269fb7d" alt="Important Information" />
            <ul style="margin: 10px 0; padding: 0 0 0 16px;">
               <li style="margin: 10px 0;">Date and routing changes will be subject to Airline Penalty and Fare Difference if any.</li>
               <li style="margin: 10px 0;">Fares are not guaranteed until ticketed. Your Booking is confirmed through <strong>${
                 data.bookedThrough
               }</strong>.</li>
               <li style="margin: 10px 0;"><strong>Cancellation Policy:-</strong> Tickets are Non-Refundable/Non-Transferable and Name changes are not permitted.<br />All customers are advised to verify travel documents (transit visa/entry visa) for the country through which they are transiting and/or entering. <strong>${
                 data.bookedThrough
               }</strong> will not be responsible if proper travel documents are not available and you are denied entry or transit into a Country. We request
                  you to consult the embassy of the country(s) you are visiting or transiting through.
               </li>
               <li style="margin: 10px 0;">
                  <strong>Please Note: -</strong>
                  <ul>
                     <li style="margin: 10px 0;">Signing this document, you are accepting all the above mentioned terms and conditions.</li>
                     <li style="margin: 10px 0;">Your credit card maybe billed in multiple charges not exceeding the total amount.</li>
                  </ul>
               </li>
            </ul>
         </div>
         <div style="padding: 30px 0 0; line-height: 1;">
            <p style="margin: 5px 0;">Thank you,</p>
            <p style="font-weight: 700; margin: 5px 0;">${data.agentName}</p>
            <p style="font-weight: 700; margin: 5px 0;">Ext.: ${
              data.agentExt
            }</p>
         </div>
      </div>
    </div>`;
};

const futureCreditMail = (data) => {
  const filterArr = [];

  const renderPass = () => {
    let passHtml = "";

    data.passenger_info.forEach((el) => {
      if (el.value !== "") {
        passHtml += `<p style="font-weight: 700; margin: 5px 0;">${el.value}</p>`;
      }
    });

    return passHtml;
  };

  return `<div style="font-size: 16px; line-height: 1.5;">
        <div style="text-align: right; padding: 15px; width: 180px; margin-left: auto; ">
           <div style="text-align: center;">
              <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/book_ref.png?alt=media&token=3ef61d81-83b7-4689-900e-32287c4edd7a" alt="Booking Reference" />
              <p style="margin-top: 10px; font-size: 18px;">${
                data.bookingReference
              }</p>
           </div>
        </div>
        <div>
           <h3 style="font-size: 22px; margin: 10px 0 10px;">TFN ${
             data.tfn
           }</h3>
           <p style="margin: 15px 0;">Dear ${data.customerName},</p>
           <p style="margin: 15px 0;">Total price including all taxes and fees: <strong>(${
             data.totalPrice
           })</strong>.</p>
           <p><strong>Please Note: -</strong> As per our conversation and as agreed, we have cancelled your reservation under confirmation <strong>#${
             data.bookingReference
           }</strong>, with price of <strong>${
    data.priceField1
  }</strong> per passenger (Including taxes &amp; fees).</p>
           <p>There will be 1 charge appearing on your card statement of <strong>${
             data.priceField2
           }</strong> from ${data.bookedThrough}.</p>
           <p>We have cancelled your reservation as you are paying through ${
             data.paymentMode
           } ending with *******${data.lastDigits}.</p>
           <p style="margin: 5px 0;">Once the booking is cancelled you will have ${
             data.priceField3
           } credit with (${data.airlinesName}).</p>
           <p style="font-weight: 600; margin: 10px 0;">A few notes about the airline credit: All travel must be completed on or before, ${
             data.airTravelComplete
           }, and is only valid for travel on
           (${
             data.airlinesName
           }). All changes are subject to availability and airline fare rules.</p>
           <p style="margin: 5px 0;">When you use the credit, there will be an airline penalty of ${
             data.airlinePenalty
           } per person, plus any applicable fare difference. This credit is non-refundable and non-transferable, and may only be used by the person(s) named on the original ticket, regardless of the name
           on the credit card that purchased the tickets(s).</p>
           <p style="margin: 5px 0;">Please be advised that the credit can only be booked through our Customer Care team at ${
             data.phoneNumber
           }. Please do not contact your airline(s) directly to redeem your credit.</p>
           <div style="padding: 20px 30px;">
                <p style="font-weight: 700; margin: 5px 0;">Card Holder: - ${
                  data.cardHolder
                }</p>
                <p style="font-weight: 700; margin: 5px 0;">Passenger's Name : - ${renderPass()}</p>
            </div>
            <div style="padding: 0 30px;">
                <p>**********************************************</p>
                <p style="font-weight: 700; margin: 5px 0;">Address: - ${
                  data.address
                }</p>
                <p>**********************************************</p>
            </div>
           <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/flight-project-1ac26.appspot.com/o/imp_info.png?alt=media&token=fb704270-6486-4cb3-a21f-35ed0269fb7d" alt="Important Information" />
              <ul style="margin: 10px 0; padding: 0 0 0 16px;">
                 <li style="margin: 10px 0;">Date and routing changes will be subject to Airline Penalty and Fare Difference if any.</li>
                 <li style="margin: 10px 0;">Fares are not guaranteed until ticketed. Your Booking is confirmed through <strong>${
                   data.bookedThrough
                 }</strong>.</li>
                 <li style="margin: 10px 0;"><strong>Cancellation Policy:-</strong> Tickets are Non-Refundable/Non-Transferable and Name changes are not permitted.<br />All customers are advised to verify travel documents (transit visa/entry visa) for the country through which they are transiting and/or entering. <strong>${
                   data.bookedThrough
                 }</strong> will not be responsible if proper travel documents are not available and you are denied entry or transit into a Country. We request
                    you to consult the embassy of the country(s) you are visiting or transiting through.
                 </li>
                 <li style="margin: 10px 0;">
                    <strong>Please Note: -</strong>
                    <ul>
                       <li style="margin: 10px 0;">Signing this document, you are accepting all the above mentioned terms and conditions.</li>
                       <li style="margin: 10px 0;">Your credit card maybe billed in multiple charges not exceeding the total amount.</li>
                    </ul>
                 </li>
              </ul>
           </div>
           <div style="padding: 30px 0 0; line-height: 1;">
              <p style="margin: 5px 0;">Thank you,</p>
              <p style="font-weight: 700; margin: 5px 0;">${data.agentName}</p>
              <p style="font-weight: 700; margin: 5px 0;">Ext.: ${
                data.agentExt
              }</p>
           </div>
        </div>
      </div>`;
};

module.exports = {
  exchangeMail,
  cancelRefundMail,
  newBookingMail,
  futureCreditMail,
};
