import React from "react";
import { motion } from "framer-motion";
import "./PageStyles.css";

export default function Home() {
  return (
    <div className="page-container">
      <motion.div className="glass page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>Гильдия NAVY SEALS (лидер <span class="blinking">КРАСОТКА</span>)</h2>

        <p>Мы входим в топ 30 гильдий СНГ по Free Fire. Сражаемся, побеждаем, уважаем!</p>
      </motion.div>

      <motion.div className="glass page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>Самый приемлимиый и надежный лидер</h2>
        <p>Почему так?</p>
        <p>Спросите у участников гильдий</p>
      </motion.div>

      <motion.div className="glass page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>Самая красивая, безупречная, умная и уважающая лидер</h2>
        <p>@deflinkw так лично считает</p>
      </motion.div>

      <motion.div className="glass page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>@Ebuchiy_toxic</h2>
        <p>Самая легенда гильдий, также оператора ПХ</p>
      </motion.div>

      <motion.div className="glass page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>Турнир гильдий КБ</h2>
        <p>Ху@ня</p>
      </motion.div>

      <motion.div className="glass page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>Вступай, выполняй, общайся</h2>
        <p>@oaoaoaoaooaaoa</p>
      </motion.div>
    </div>
  );
}
