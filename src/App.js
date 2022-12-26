import './App.css';
import NavBar from './Components/NavBar';
import ImageSlider from './Components/ImageSlider';
import Feaatures from './Components/Feaatures';
import WhyToBuy from './Components/WhyToBuy';
function App() {
  const slides = [
    {
      url:
        "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/section01-header2.jpg",
      title: "beach"
    },
    {
      url:
        "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/redPhones.jpg",
      title: "boat"
    },
    {
      url:
        "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/section01-header1.jpg",
      title: "forest"
    }
  ];

  const tiles = [
    {url: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_camera11.png",
  data:"64MP Quad Camera"},
  {
    url:"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_cpu11.png",
    data:"Gaming Processor with  LiquidCool System",
  },
  {
    url:"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_battery11.png",
    data:"4500mAh high-capacity battery",
  },
  {
    url:"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_nfc11.png",
    data:"Multifunctional NFC supports Google Pay",
  },
  {
    url:"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_charge11.png",
    data:"18W fast charge",
  },
  {
    url:"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_front1111.png",
    data:"Corning® Gorilla® Glass 5 front and rear",
  },
  {
    url:"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_display11.png",
    data:"6.53” FHD+ Dot Drop display",
  },
  {
    url:"https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_desc_design11.png",
    data:"4-sided 3D curved back",
  },
  ]

  const containerStyles = {
    width: "100%",
    height: "500px",
    margin: "20 auto"
  };
  return (
    <div>
      <NavBar />
      <div style={containerStyles}>
      <ImageSlider slides={slides}/>
      </div>
      < Feaatures tiles={tiles}/>
      <WhyToBuy />
    </div>
  );
}

export default App;
