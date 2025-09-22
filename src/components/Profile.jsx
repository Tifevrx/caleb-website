import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-image">
        <img src="assets/aboutimage.jpg" alt="Dr. Caleb O. Oladipo" />
      </div>
      <div className="profile-text">
        <h2>About Dr. Caleb O. Oladipo</h2>
        <p>
          Originally from Nigeria, Dr. Caleb Oladipo holds the inaugural
          Snellings Chair of Christian Evangelism and Mission at Campbell
          University Divinity School where he also serves as the Director of the
          Braswell World Religions and Global Cultures Center.
        </p>
        <p>
          Dr. Oladipo received his post-secondary education in the United States,
          graduating from <strong>Wayland Baptist University (B.A.)</strong>,
          <strong> Southeastern Baptist Theological Seminary (M.Div.)</strong>,
          <strong> Yale University Divinity School (STM)</strong>—where he was
          named the first Charles Forman Scholar in 1988—and
          <strong> Baylor University (Ph.D.)</strong>.
        </p>
        <p>
          He has written numerous articles and three books that explore the
          natural depth and character of Christianity in the Global South:
        </p>
        <ul>
          <li>
            <em>
              The Development of the Doctrine of the Holy Spirit in the Yoruba
              (Africa) Indigenous Christian Movement
            </em>{" "}
            (1996)
          </li>
          <li>
            <em>
              The Will to Arise: Theological and Political Themes in African
              Christianity and the Renewal of Faith and Identity
            </em>{" "}
            (2006)
          </li>
          <li>
            <em>Christians in the City of Lagos</em> (Bloomsbury Academic, 2025)
          </li>
        </ul>
        <p>
          Dr. Oladipo was a member of the delegation to the
          <strong> 5th Parliament of World Religions</strong> at Melbourne,
          Australia in 2009, and he has served as a visiting scholar and
          professor on five continents. He is an active member of many
          professional organizations and has received numerous leadership and
          service awards, including the
          <strong> Distinguished Alumni Leadership Award</strong> at Wayland
          Baptist University in 2016.
        </p>
        <p>
          In April 2025, Professor Oladipo was elected to become a member of the
          prestigious <strong>American Theological Society</strong>. He is
          married to <strong>Tylia Barnes</strong>, an executive director of the
          Sisters of Mercy of the Americas. Fluent in six languages, he has
          three adult children and a grandson.
        </p>
      </div>
    </section>
  );
};

export default Profile;
