export function AwardCard({ img, title, subtitle }) {
    return (
      <div className="text-center max-w-xs">
        {img && <img src={img} alt="award" className="w-35 h-35 mx-auto" />}
        <h3 className="mt-4 font-semibold text-lg">{title}</h3>
        {subtitle && <p className="text-gray-600 mt-2 text-sm w-[200px]">{subtitle}</p>}
      </div>
    );
  }
  
  export default function AwardsSection() {
    const awards = [
      {
        img: "/award/highendcondo.png", // Ganti dengan path gambar yang sesuai
        subtitle: "Best High End Condo Development Jakarta",
      },
      {
        img: "/award/Bestretail.png", // Ganti dengan path gambar yang sesuai
        subtitle: "Best Retail Development",
      },
      {
        img: "/award/The Prospective Housing Development.png", // Ganti dengan path gambar yang sesuai
        subtitle: "The Prospective Housing Development",
      },
      {
        img: "/award/Top Property.png", // Kosong karena hanya teks
        subtitle: "Top Property Achievement Pakuwon City",
      },
    ];
  
    return (
      <div className="flex justify-center gap-10 bg-cream p-10">
        {awards.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
    );
  }
  