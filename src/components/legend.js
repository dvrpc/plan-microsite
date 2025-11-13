import React from "react"

const Legend = ({ selectedLayer }) => {
  return (
    <div className="[&>*]:bg-white [&>*]:rounded-lg [&>*]:p-2 [&>*]:gap-2 font-[Roboto] [&>*]:w-1/2 [&>*]:m-3 [&>*]:text-sm">
      {selectedLayer === "pop" && (
        <div class="flex flex-col z-[100] absolute">
          <h3 class="legend-h3">People</h3>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dfeffb" }}
            ></span>
            <span>Less than 10,000</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#a6cfe1" }}
            ></span>
            <span>10,000 to 24,999</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#4d9dc0" }}
            ></span>
            <span>25,000 to 49,999</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#0078ae" }}
            ></span>
            <span>50,000 to 99,999</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#004e76" }}
            ></span>
            <span>100,000 or More</span>
          </div>{" "}
        </div>
      )}
      {selectedLayer === "popABS" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>People</h3>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#cccccc" }}
            ></span>
            <span>Loss of Population</span>
          </div>

          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dfeffb" }}
            ></span>
            <span>0 to 1,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#a6cfe1" }}
            ></span>
            <span>2,000 to 3,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#4d9dc0" }}
            ></span>
            <span>4,000 to 5,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#0078ae" }}
            ></span>
            <span>6,000 or More</span>
          </div>
        </div>
      )}
      {selectedLayer === "popPER" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Percent Change</h3>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dfeffb" }}
            ></span>
            <span>Stable (-5% to +5%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#a6cfe1" }}
            ></span>
            <span>Moderate Growth (+6% to +25%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#4d9dc0" }}
            ></span>
            <span>Significant Growth (+26% to +50%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#0078ae" }}
            ></span>
            <span>Exceptional Growth (Above 50%)</span>
          </div>
        </div>
      )}
      {selectedLayer === "emp" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Employees</h3>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dadaeb" }}
            ></span>
            <span>Fewer than 5,000</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#bcbddc" }}
            ></span>
            <span>5,000 to 9,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#9e9ac8" }}
            ></span>
            <span>10,000 to 19,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#756bb1" }}
            ></span>
            <span>20,000 to 39,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#54278f" }}
            ></span>
            <span>40,000 or More</span>
          </div>
        </div>
      )}
      {selectedLayer === "empABS" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Employees</h3>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#cccccc" }}
            ></span>
            <span>Loss of Employees</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dadaeb" }}
            ></span>
            <span>1 to 999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#bcbddc" }}
            ></span>
            <span>1,000 to 1,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#9e9ac8" }}
            ></span>
            <span>2,000 to 2,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#756bb1" }}
            ></span>
            <span>3,000 or More</span>
          </div>
        </div>
      )}
      {selectedLayer === "empPER" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Percent Change</h3>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#bcbddc" }}
            ></span>
            <span>Stable (-5% to +5%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#9e9ac8" }}
            ></span>
            <span>Moderate Growth (+6% to +25%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#756bb1" }}
            ></span>
            <span>Significant Growth (+26% to +50%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#54278f" }}
            ></span>
            <span>Exceptional Growth (Above 50%)</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Legend
