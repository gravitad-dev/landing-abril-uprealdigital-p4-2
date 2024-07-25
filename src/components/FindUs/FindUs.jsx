import data from "../../data.json";
import Title from "../ui/Title";
import FindUsItem from "./FindUsItem";

const FindUs = () => {
  const { title, subtitle, img, items } = data["section-seven"];
  return (
    <section className="py-[100px]" id="find-us">
      <Title title={title} subtitle={subtitle} />
      <div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center
       md:justify-items-stretchh-[400px]"
      >
        <div className="rounded-md p-2 h-full bg-custom-neutral">
          <img
            src={img.url}
            alt={img.title}
            title={img.title}
            className="w-full h-full max-h-[224px] object-cover rounded-md"
          />
        </div>
        {/* items */}
        <ul className=" h-full grid grid-flow-row gap-5 mt-10 md:m-0">
          {items.map((item) => (
            <FindUsItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default FindUs;
