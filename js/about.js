// about info

const infoCards = document.getElementsByClassName("info-card");

console.log(infoCards);

const infoArr = [
  {
    heading: "Our Mission",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero architecto nulla exercitationem commodi aliquid provident, assumenda numquam illo vel illum tenetur voluptas, hic corrupti eius. Perspiciatis asperiores aliquam laborum, aperiam nisi voluptatibus minus totam omnis accusantium. Ad ullam accusantium quae id voluptatibus earum corrupti corporis et, nam hic quasi molestiae facilis voluptatem fuga nemo temporibus magni itaque dolore labore voluptas incidunt. Quidem, excepturi quaerat at reprehenderit hic vitae, ipsum cupiditate nesciunt laboriosam aliquam, tempora consequuntur architecto eligendi accusantium nostrum possimus numquam maxime harum unde. Dolorem et debitis, eum, delectus, incidunt libero error unde deleniti veritatis ipsum atque distinctio. Eum doloremque aliquid debitis dolore possimus! At, earum soluta corporis unde rem dignissimos officiis, facilis magnam quisquam recusandae nobis distinctio id quas?",
  },
  {
    heading: "Our Vision",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam et maiores, quisquam harum corporis assumenda. In eligendi quod laudantium, quae molestiae asperiores cum debitis repellendus odio, porro harum quo adipisci ab voluptatibus impedit aut reprehenderit ad nihil sequi pariatur dolore aliquam. Accusantium, pariatur nihil quam omnis consequuntur, iusto ipsam itaque doloribus consequatur animi dolorum aspernatur, quaerat temporibus non ea totam expedita illo doloremque? Ducimus dignissimos nobis provident blanditiis expedita facilis eligendi, officia quos quia fugit veritatis repudiandae! Quibusdam, accusamus.",
  },
  {
    heading: "Our Philosophy",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam quaerat, nam reiciendis velit doloribus, ut quidem et laborum cum neque distinctio, cumque saepe alias sed ullam ducimus. Error deleniti vel dolorem tempore sint, repellendus rerum quia dolor suscipit odit perspiciatis aliquid? Distinctio ratione animi libero ad mollitia deleniti hic aliquid quidem maxime. Deserunt amet alias dolor sit tempora inventore, at veritatis iusto autem eum libero optio rem illo atque sapiente labore, veniam aliquam odio impedit a dolorum repudiandae dignissimos? Iure dignissimos tempora consequatur nam, ad non nostrum in vel?",
  },
  {
    heading: "Our Strategy",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis quod, necessitatibus perspiciatis natus vero possimus? Earum beatae in itaque hic expedita eveniet suscipit rerum ad. Rerum placeat obcaecati minima dignissimos nisi magnam. Ducimus cupiditate dolores assumenda saepe laudantium architecto quae. Ipsa totam ab iure alias veniam illo pariatur qui velit dolor omnis tenetur, quam rem saepe eum. Distinctio ea adipisci tempore voluptate. Harum, amet dolorem vitae dolores nihil fugit mollitia? Exercitationem amet voluptates itaque in sunt non aliquam, eius dolore dicta officia placeat recusandae nulla quasi quae nobis quam repellendus. Optio aspernatur a doloribus ex, corporis culpa atque. Dicta, voluptas nobis!",
  },
];

for (let i = 0; i < infoCards.length; i++) {
  infoCards[i].onclick = () => {
    document.querySelector(".about-info-left h2").innerHTML =
      infoArr[i].heading;
    document.querySelector(".about-info-left .detail").innerHTML =
      infoArr[i].detail;
  };
}
