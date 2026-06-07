import React, { useEffect, useState } from "react";
import { GiSpellBook, GiTrophyCup } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { jsonData } from "../json/home";
import { IoWoman } from "react-icons/io5";

const icons = {
  GiSpellBook,
  GiTrophyCup,
  LiaChalkboardTeacherSolid,
  IoWoman,
};

export default function ActivitiesNo() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    jsonData.activities.forEach((item) => {
      startCounter(item.id, Number(item.Number.replace("+", "")));
    });
  }, []);

  const startCounter = (id, target) => {
    let current = 0;

    const interval = setInterval(() => {
      current += 4; // speed

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCounts((prev) => ({
        ...prev,
        [id]: current,
      }));
    }, 100);
  };

  return (
    <div className="activities-no">
      <div className="activities-on-in">
        {jsonData.activities.map((item) => {
          const Icon = icons[item.icon];

          return (
            <div key={item.id}>
              <div className="activities-icon">{Icon ? <Icon /> : null}</div>

              <div className="activities-text">
                <h1>{counts[item.id] || 1}+</h1>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
