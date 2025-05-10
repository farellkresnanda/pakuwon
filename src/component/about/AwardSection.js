export function AwardCard({ img, title, subtitle }) {
    return (
      <div className="text-center max-w-xs">
        {img && <img src={img} alt="award" className="w-24 h-24 mx-auto" />}
        <h3 className="mt-4 font-semibold text-lg">{title}</h3>
        {subtitle && <p className="text-gray-600 mt-2 text-sm w-[200px]">{subtitle}</p>}
      </div>
    );
  }
  
  export default function AwardsSection() {
    const awards = [
      {
        img: "/images/award1.png", // Ganti dengan path gambar yang sesuai
        subtitle: "Southeast Asia Best Managed Companies Indonesia Deloitte",
      },
      {
        img: "/images/award2.png", // Ganti dengan path gambar yang sesuai
        subtitle: "Top 50 Best Companies Forbes Indonesia",
      },
      {
        img: "/images/award3.png", // Ganti dengan path gambar yang sesuai
        subtitle: "Best Mixed-use Development (Pakuwon Mall Superblock) PropertyGuru Group",
      },
      {
        img: "/images/award3.png", // Kosong karena hanya teks
        subtitle: "Rekam Jejak Pertumbuhan",
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
  