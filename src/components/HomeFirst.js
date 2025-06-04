import { Link } from "react-router-dom";

const items = [
  {
    to: "/orderMed",
    img: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0",
    title: "Medicine",
    offer: "UPTO 20% OFF",
  },
  {
    to: "/labtest",
    img: "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0",
    title: "Lab Tests",
    offer: "UPTO 70% OFF",
  },
  {
    to: "/healthcare",
    img: "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0",
    title: "Healthcare",
    offer: "UPTO 60% OFF",
  },
  {
    to: "/orderMed",
    img: "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0",
    title: "Health Blogs",
    offer: "EXTRA",
    lightOffer: true,
  },
  {
    to: "/orderMed",
    img: "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0",
    title: "Offers",
    offer: "EXTRA",
    lightOffer: true,
  },
  {
    to: "/consultation",
    img: "https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0",
    title: "Consultation",
    offer: "EXTRA",
    lightOffer: true,
  },
  {
    to: "/healthcare",
    img: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0",
    title: "Value Store",
    offer: "UPTO 50% OFF",
  },
];

const HomeFirst = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item, index) => (
        <Link to={item.to} key={index}>
          <div className="bg-white rounded-sm shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center p-4 hover:scale-105">
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 object-contain mb-2"
            />
            <p className="font-semibold text-lg text-gray-800">{item.title}</p>
            <p
              className={`text-sm mt-1 font-medium ${
                item.lightOffer ? "text-gray-400" : "text-green-600"
              }`}
            >
              {item.offer}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeFirst;
