

function FoodsPage({
  floatStyle,
  setFloatStyle,
  currentLayout,
  setCurrentLayout,
  layoutName,
  setLayoutName,
}) {
  function handleChangeLayout(value) {
    if (value === "flex-layout") {
      setCurrentLayout(value);
      setLayoutName("Flexbox Sidebar");
    } else if (value === "float-bottom") {
      setFloatStyle(value);
      setCurrentLayout("");
      setLayoutName("Floated Sidebar");
    } else {
      setCurrentLayout(value);
      setFloatStyle("");
      setLayoutName("Grid View");
    }
  }

  return (
    <main id="main-web-Page">
      <h4 className="food-header">{layoutName} + Blogs</h4>
      <div className="container">
        <div className={`layout-container ${currentLayout}`}>
          <div className="" id="topic-1">
            <h3>Topic 1 Lorem ipsum dolor sit amet</h3>
            <span>
              By
              <a href="#" id="name-of-title">
                Himdad Hasan
              </a>
              Wednesday, October 16, 2024, 2:30 PM
            </span>
            <img
              src="waffles.png"
              alt=""
              className={`float1 ${floatStyle}`}
              style={{
                float:
                  (currentLayout === "grid-layout" ||
                    currentLayout === "flex-layout") &&
                  "none",
              }}
              id="image-information-1"
            />
            <div className="" id="text-information">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
                nulla! Nisi pariatur cumque voluptatum. Blanditiis fugit ad quo?
                Illo, porro. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eveniet cumque tempora voluptatibus corrupti aperiam
                possimus. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempora, quos?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                accusamus atque, hic nisi libero blanditiis dolorum laborum
                totam eaque aspernatur. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. In, natus.
              </p>
            </div>
          </div>

          <div className="" id="topic-2">
            {" "}
            <h3>Topic 2 Lorem ipsum dolor sit amet</h3>
            <span>
              By{" "}
              <a href="#" id="name-of-title">
                Himdad Hasan
              </a>{" "}
              Wednesday, October 16, 2024, 2:30 PM
            </span>
            <img
              src="/kunafa.png"
              alt=""
              className={`float2 ${floatStyle}`}
              style={{
                float:
                  (currentLayout === "grid-layout" ||
                    currentLayout === "flex-layout") &&
                  "none",
              }}
              id="image-information-1"
            />
            <div className="" id="text-information">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
                nulla! Nisi pariatur cumque voluptatum. Blanditiis fugit ad quo?
                Illo, porro. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eveniet cumque tempora voluptatibus corrupti aperiam
                possimus. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempora, quos?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                accusamus atque, hic nisi libero blanditiis dolorum laborum
                totam eaque aspernatur. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. In, natus.
              </p>
            </div>
          </div>

          <div className="" id="topic-3">
            {" "}
            <h3>Topic 3 Lorem ipsum dolor sit amet</h3>
            <span>
              By{" "}
              <a href="#" id="name-of-title">
                Himdad Hasan
              </a>{" "}
              Wednesday, October 16, 2024, 2:30 PM
            </span>
            <img
              src="/pancake.png"
              alt=""
              className={`float3 ${floatStyle}`}
              style={{
                float:
                  (currentLayout === "grid-layout" ||
                    currentLayout === "flex-layout") &&
                  "none",
              }}
              id="image-information-1"
            />
            <div className="" id="text-information">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
                nulla! Nisi pariatur cumque voluptatum. Blanditiis fugit ad quo?
                Illo, porro. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eveniet cumque tempora voluptatibus corrupti aperiam
                possimus. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempora, quos?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                accusamus atque, hic nisi libero blanditiis dolorum laborum
                totam eaque aspernatur. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. In, natus.
              </p>
            </div>
          </div>
          <div className="" id="topic-4">
            {" "}
            <h3>Topic 4 Lorem ipsum dolor sit amet</h3>
            <span>
              By{" "}
              <a href="#" id="name-of-title">
                Himdad Hasan
              </a>{" "}
              Wednesday, October 16, 2024, 2:30 PM
            </span>
            <img
              src="/mahalabia.png"
              alt=""
              className={`float4 ${floatStyle}`}
              style={{
                float:
                  (currentLayout === "grid-layout" ||
                    currentLayout === "flex-layout") &&
                  "none",
              }}
              id="image-information-1"
            />
            <div className="" id="text-information">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
                nulla! Nisi pariatur cumque voluptatum. Blanditiis fugit ad quo?
                Illo, porro. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eveniet cumque tempora voluptatibus corrupti aperiam
                possimus. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempora, quos?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                accusamus atque, hic nisi libero blanditiis dolorum laborum
                totam eaque aspernatur. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. In, natus.
              </p>
            </div>
          </div>
        </div>
        {!(currentLayout === "grid-layout") && (
          <div
            className="layout-box-design hidden"
            id="layout-Design"
            style={{
              height: currentLayout === "flex-layout" ? "auto" : "fit-content",
            }}
          >
            <h3>Layout Design</h3>
            <ul className="cursor-pointer">
              <li
                value="Float"
                onClick={() => handleChangeLayout("float-bottom")}
              >
                Float Layout with Side nav
              </li>
              <li
                value="FlexBox"
                onClick={() => handleChangeLayout("flex-layout")}
              >
                FlexBox Layout with Side nav
              </li>
              <li
                value="Grid"
                onClick={() => handleChangeLayout("grid-layout")}
              >
                Grid Layout with Side nav
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default FoodsPage;
