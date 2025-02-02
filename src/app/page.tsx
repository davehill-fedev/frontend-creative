import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <Image src="/images/field-5065671_1280.jpg" alt="Lion" width={500} height={500} className="w-full max-h-[40rem]" />
      </section>
      <section className="w-2/3 mx-auto my-4">
        <h1 className="text-4xl font-semibold">Frontend Creative</h1>
        <p>An exploration of what it takes to be an effective frontend developer with a craetive flair and a desire to create strong user experiences.</p>
      </section>
      <section className="grid grid-cols-3 gap-4 m-8">
        <article className=" p-8">
          <h2 className="text-2xl font-semibold">Frameworks & Libraries</h2>
          <p>Using ReactJS and TailwindCSS, along with similar tools, enables developers to achieve remarkable results in web development. ReactJS, a powerful JavaScript library, simplifies the process of building dynamic and interactive user interfaces with its component-based architecture. This approach not only promotes code reusability and maintainability but also enhances the overall development speed. TailwindCSS, a highly customizable utility-first CSS framework, allows developers to rapidly create aesthetically pleasing and responsive designs without writing extensive custom CSS. Its design system ensures consistency and efficiency, making it easier to adhere to design standards. Together, these tools empower developers to build modern, scalable, and visually appealing web applications while maintaining a high level of productivity and flexibility. The synergy between ReactJS and TailwindCSS exemplifies the balance between functionality and design, leading to superior user experiences.</p>
        </article>
        <article className=" p-8">
          <h2 className="text-2xl font-semibold">Accessibility & UX</h2>
          <p>The value of a frontend developer possessing an intimate understanding of accessibility and user experience cannot be overstated. Accessibility ensures that web applications are usable by people of all abilities, creating an inclusive digital environment where no one is left behind. When a developer is well-versed in accessibility, they can identify and eliminate barriers that might prevent individuals with disabilities from accessing content, fostering equal opportunities and compliance with legal standards. Meanwhile, a deep knowledge of user experience (UX) empowers developers to design interfaces that are not only functional but also intuitive and enjoyable. This dual expertise enables the creation of seamless, engaging experiences that resonate with users, boosting satisfaction and retention. Ultimately, a frontend developer skilled in both accessibility and UX delivers products that are more effective, empathetic, and aligned with the diverse needs of a global user base.</p>
        </article>
        <article className=" p-8">
          <h2 className="text-2xl font-semibold">Duty & Passion</h2>
          <p>Frontend development, a harmonious blend of duty and passion, demands both meticulous attention to detail and an intrinsic love for crafting engaging user experiences. The sense of duty in a frontend developer lies in the commitment to creating intuitive, accessible, and efficient interfaces that cater to diverse user needs. This responsibility entails rigorous testing, ongoing improvements, and adherence to best practices and standards. Passion, on the other hand, fuels the creativity and innovation required to push the boundaries of what’s possible in web design. It’s the driving force behind experimenting with new technologies, staying updated with the latest trends, and continuously learning to enhance one’s skills. When duty and passion intersect in frontend development, the result is not just functional applications but delightful digital experiences that resonate with users.</p>
        </article>
      </section>
    </>
  );
}
