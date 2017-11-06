const ResultItem = ({ category, workLink, videoID, videoSrc, workTitle, workSubtitle }) =>
    <div className="container uxwork">
      <div className="row">
        <a href={workLink}>
          <div className="col-lg-7 col-md-7 text-center work-img">
            <video id={videoID} className="my-video" loop webkit-playinline />
            <source src={videoSrc} type="video/mp4" />
          </div>
        </a>
        <div className="col-lg-5 col-md-5 text-center">
          <p className="work-title">{workTitle}</p>
          <p className="work-subtitle">{workSubtitle}</p>
        </div>
        <div className="div-line"></div>
      </div>
    </div>;

const Result = ({ state: { products, displayCategory } }) =>
  <div>
    {products
      .filter(({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, workLink }) =>
        <ResultItem category={category} workLink={workLink} />
      )}
  </div>;

const ButtonCategory = ({ setCategory, category }) =>
  <button
    href=""
    className="btn"
    onClick={() => setCategory(category)}
  >
    {category}
  </button>;

const UI = ({
  state,
  state: { productCategories },
  setCategory,
  allProducts
}) =>
  <div className="uxworks">
    <div className="container-fluid content-header text-center">
      <div className="category">
        <div className="category-title"><h4>Hand-picked</h4></div>
        {productCategories.map(category =>
          <ButtonCategory setCategory={setCategory} category={category} />
        )}
        <div className="category-title title-delay"><h4>Awesome UX Works:</h4></div>
      </div>
    </div>
    <Result state={state} />
  </div>;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
      products: PRODUCTS,
      productCategories: PRODUCT_CATEGORIES
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }
  render() {
    return <UI setCategory={this.setCategory} state={this.state} />;
  }
}

// data
const PRODUCTS = [
  { category: "visually", workLink: "http://www.wennizhou.com", videoID: "v001", videoSrc: "img/000.mp4", workTitle: "Tastebuds", workSubtitle: "Wenni Zhou | Interaction Designer @ Google" },
  { category: "logically", workLink: "http://www.sylviading.com", videoID: "v002", videoSrc: "img/001.mp4", workTitle: "ALMS", workSubtitle: "Sylvia Ding | UX Designer @ LinkedIn" }
];

// get unique category items
const uniqueItems = (x, i, a) => a.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();

ReactDOM.render(<Main products={PRODUCTS} />, document.getElementById("content-section"));
