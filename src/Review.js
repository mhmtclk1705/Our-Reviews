import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// iconları kütüphaneden indirdik npm install react-icons --save
// https://react-icons.github.io/react-icons/
// iconları css ile düzenleyebiliriz

const Review = () => {
  // destructuring yaptığımızda yapımız index üzerine çalışacağı için bir useState kullanarak index tanımladık
  const [index, setIndex] = useState(0);
  // destructuring yapımız bu sefer hepsini ekrana getirmek istemediğimiz için index ile gelmesini istiyoruz
  const { name, job, image, text } = people[index];

  // eğer ki data nın son indexine geldiğinde ileri tuşuna basarsak listenin başına atsın diye
  // yada en başındayken geriye bastığımızda listenin sonuna gitsin diye
  // bir checknumber fonksiyonu yazıp ve ileri geri random tuşlarını bununla kontrol ediyoruz
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  // ileri tuşuna basıldığında index i bir arttırıp setIndex içerisine tanımlıyoruz
  // useState kullanımı bu şekilde
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  // arttırmanın tam tersi
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  // suprise me tuşuna basıldığında random bir index oluşturması için bu yapıyı kullanıyoruz
  // eğer aynı index gelmesi durumunu kontrol altına almak için if bloğu kullandık ve bu durumda bir sonrakisini
  // alması için 1 arttırdık
  // yine checkNumber içerisinde son ya da ilk indexe gelme durumunu kontrol altına almak için
  // setIndex e checkNumberile gönderdik
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  // hazır css stillerine uygun
  // divler içerisine yerleştirdik
  // iconları kütüphaneden indirdik npm install react-icons --save

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        {/* geri tuşuna basıldığında onClick oluşturduk ve prevPerson ı çağırdık */}
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        {/* ileri tuşuna basıldığında onClick oluşturduk ve nextPerson ı çağırdık */}

        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      {/* suprise me tuşuna basıldığında onClick oluşturduk ve randomPerson ı çağırdık */}

      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
