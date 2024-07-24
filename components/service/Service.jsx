import WorkProcess from "./WorkProcess";
import ServiceList from "./ServiceList";

export default function Service() {
  return (
    <div>
      <div className="w-[90%] max-w-[1440px] mx-auto flex md:flex-row flex-col justify-between items-center gap-10 pt-10 pb-20">
        <h1 className="lg:text-7xl text-5xl font-medium">SERVICES</h1>
        <p className="lg:text-lg text-base font-normal text-justify leading-5 max-w-md">
          We offer a wide range of professional photography services tailored to
          capture your most precious moments. From weddings to corporate events,
          our expert team ensures stunning results that exceed your
          expectations.
        </p>
      </div>
      <WorkProcess />
      <ServiceList />
    </div>
  );
}
