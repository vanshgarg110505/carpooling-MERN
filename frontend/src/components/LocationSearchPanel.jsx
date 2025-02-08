import React from "react";

const LocationSearchPanel = () => {
    // SAMPLE ARRAY FOR LOCATION
    const location = [
        "24B,Near Kapoor's cafe,Bhopal",
        " 83, Vijaykar Wadi, S V Rd, Malad (west)",
        "58/1c, K S Lane, S J P Road",
        "221 Ashirwad Estate, Est No 3 Ram Mandir Rd, Motilal Nagar"
    ]
  return (
    <div>
      {/*THIS IS JUST A SAMPLE DATA */}
      {
        location.map(function(elem){
            return  <div className="flex gap-4 border-2 border-gray-50  active:border-gray-50  p-3 rounded-xl items-center my-2 justify-start">
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill "></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        })
      }
      
    </div>
  );
};

export default LocationSearchPanel;
