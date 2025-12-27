const Trusted = () => {
  return (
    <section className="py-10">
      <div className="max-w-2lg mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-y-5">
        <h2 className="text-xl lg:text-2xl font-bold max-lg:text-center lg:max-w-3xs">Trusted by companies all over the world</h2>
        <div className="flex items-center justify-center gap-x-10 gap-y-5 flex-wrap">
          <img className="max-w-24 md:max-w-32" src="/assets/brands/logo-1.webp" alt="Logo 1" draggable={false} />
          <img className="max-w-24 md:max-w-32" src="/assets/brands/logo-2.webp" alt="Logo 2" draggable={false} />
          <img className="max-w-24 md:max-w-32" src="/assets/brands/logo-4.webp" alt="Logo 3" draggable={false} />
          <img className="max-w-24 md:max-w-32" src="/assets/brands/logo-5.webp" alt="Logo 4" draggable={false} />
          <img className="max-w-24 md:max-w-32" src="/assets/brands/logo-6.webp" alt="Logo 5" draggable={false} />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
