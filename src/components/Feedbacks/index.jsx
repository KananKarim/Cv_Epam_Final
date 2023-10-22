import React from "react";
import Title from "../Title";
import Feedback from "../Feedback";
import me from "../../assets/me.jpg";

const Feedbacks = () => {
  const data = [
    {
      id:0,
      feedback:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
      reporter: {
        photoUrl: me,
        name: "Kanan Karimli",
        citeUrl: "https://www.citeexample.com",
      },
    },
    {
      id:1,
      feedback:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
      reporter: {
        photoUrl: me,
        name: "Kanan Karimli",
        citeUrl: "https://www.citeexample.com",
      },
    },
  ];
  return (
    <section className="feedbacks" id="feedbacks">
      <Title text="Feedbacks" />
      <Feedback data={data} />
    </section>
  );
};

export default Feedbacks;
