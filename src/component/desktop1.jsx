import React from "react";
import "./style.css";

export function Desktop1() {
  var a = 123;

  return (
    <div className="root">
      <div className="header">
        <div>
          <img
            className="logo"
            src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d60/f6bf/717c1aee774434f33240cf96daacc18f"
          />
        </div>
        <div>
          <input className="country" placeholder="Country" />
        </div>
        <div className="menu">
          <div className="nhietdo">nhiet do</div>
          <div className="menu1 ">menu</div>
        </div>
      </div>
      <div className="body">
        <div>
          <img
            className="hinhmua"
            src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7c7/dddd/78d1c7921be634db47703019537a94da"
            alt="image of Cloudy21"
          />
        </div>

        <div>
          <div className="doC">27°C</div>
          <div className="doC1">
            Khả năng có mưa: 4%
            <br />
            Độ ẩm: 83%
            <br />
            Gió: 10 km/h
          </div>
        </div>

        {/* thứ 2 */}

        <div className="Groupthu">
          <div className="Tusto">
            <div className="Mon">MON</div>
            <div>
              <img
                className="rain"
                src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80d6/d6a6/028c4c529e9957d9e19f435663370c30"
              />
            </div>
            <div className="nhietdo1">
              <div className="nhietdo2">33°</div>
              <div className="nhietdo3">26°</div>
            </div>
          </div>
          {/* Thứ 3 */}

          <div className="Tusto">
            <div className="Tus">TUS</div>
            <div>
              <img
                className="rain"
                src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d84/c7eb/1f8a137e0f0db472b625bf3b1e01a042"
              />
            </div>
            <div className="nhietdo1">
              <div className="nhietdo2">33°</div>
              <div className="nhietdo3">26°</div>
            </div>
          </div>

          {/* thứ 4 */}

          <div className="Tusto">
            <div className="Wed">WED</div>
            <div>
              <img
                className="rain"
                src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d84/c7eb/1f8a137e0f0db472b625bf3b1e01a042"
              />
            </div>
            <div className="nhietdo1">
              <div className="nhietdo2">33°</div>
              <div className="nhietdo3">26°</div>
            </div>
          </div>

          {/* thứ 5 */}

          <div className="Tusto">
            <div className="Thu">THU</div>
            <div>
              <img
                className="rain"
                src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2869/6bde/3f0d4a93b10c4199e5f764faf96460ac"
              />
            </div>
            <div className="nhietdo1">
              <div className="nhietdo2">33°</div>
              <div className="nhietdo3">26°</div>
            </div>
          </div>

          {/* thứ 6 */}

          <div className="Tusto">
            <div className="Fri">FRI</div>
            <div>
              <img
                className="rain"
                src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80d6/d6a6/028c4c529e9957d9e19f435663370c30"
              />
            </div>
            <div className="nhietdo1">
              <div className="nhietdo2">33°</div>
              <div className="nhietdo3">26°</div>
            </div>
          </div>

          {/* thứ 7  */}
          <div className="Tusto">
            <div className="Sat">SAT</div>
            <div>
              <img
                className="rain"
                src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2869/6bde/3f0d4a93b10c4199e5f764faf96460ac"
              />
            </div>
            <div className="nhietdo1">
              <div className="nhietdo2">33°</div>
              <div className="nhietdo3">26°</div>
            </div>
          </div>

          {/* chủ nhật  */}
          <div className="Tusto">
            <div className="Sun">SUN</div>
            <div>
              <img
                className="rain"
                src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80d6/d6a6/028c4c529e9957d9e19f435663370c30"
              />
            </div>
            <div className="nhietdo1">
              <div className="nhietdo2">33°</div>
              <div className="nhietdo3">26°</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}
