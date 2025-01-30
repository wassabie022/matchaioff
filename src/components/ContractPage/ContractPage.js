import React from 'react';
import styles from './ContractPage.module.css';
import { Helmet } from 'react-helmet';

export default function ContractPage() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>📜 Пользовательское соглашение – Match Ai</title>
        <meta 
          name="description" 
          content="Ознакомьтесь с условиями использования Match Ai, правилами работы сервиса и обработки данных."
        />
      </Helmet>
      
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logoText}>
            <span className={styles.logoMatch}>MATCH</span>
            <span className={styles.logoAI}> AI</span>
          </h1>
        </div>
        <h2 className={styles.documentTitle}>
          ДОГОВОР ОКАЗАНИЯ УСЛУГ (ПУБЛИЧНАЯ ОФЕРТА)
        </h2>
        <p className={styles.updateDate}>[Обновлено] 30 января 2025 г.</p>
      </div>

      <div className={styles.contentBlock}>
        <p className={styles.mainText}>
          Сервис Match Ai, оказываемый физическим лицом, применяющим специальный налоговый режим "Налог на профессиональный доход", 
          именуемый в дальнейшем "Исполнитель", предлагает заключить настоящий договор (Оферту) на оказание услуг с любым физическим 
          или юридическим лицом, именуемым в дальнейшем "Заказчик", посредством совершения акцепта настоящей Оферты.
        </p>
      </div>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>1. Термины и определения</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>1.1. </span>
          В настоящем Договоре используются следующие термины:
        </p>

        {[
          {
            term: 'Оферта',
            definition: 'настоящий документ, содержащий предложение Исполнителя заключить договор на оказание услуг на изложенных условиях.'
          },
          {
            term: 'Акцепт оферты',
            definition: 'полное и безоговорочное принятие условий настоящей Оферты путем совершения действий, указанных в разделе 2 настоящего Договора.'
          },
          {
            term: 'Услуги',
            definition: 'предоставление доступа к Telegram Mini App "Match Ai", в котором нейросеть анализирует футбольные матчи и выполняет аналитическую обработку данных.'
          },
          {
            term: 'Заказчик',
            definition: 'физическое или юридическое лицо, акцептовавшее настоящую Оферту.'
          },
          {
            term: 'Платформа',
            definition: 'программно-аппаратный комплекс, доступный через Telegram Mini App "Match Ai".'
          },
          {
            term: 'Подписка',
            definition: 'платный доступ к функционалу приложения "Match Ai".'
          }
        ].map((item, index) => (
          <div key={index} className={styles.definitionItem}>
            <strong className={styles.term}>{item.term}</strong>
            <span className={styles.definition}> – {item.definition}</span>
          </div>
        ))}

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>1.2. </span>
          Исполнитель оказывает Услуги в качестве физического лица, зарегистрированного в налоговом органе 
          Российской Федерации в качестве плательщика налога на профессиональный доход (самозанятого).
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>2. Акцепт оферты</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>2.1. </span>
          Акцептом настоящей Оферты является совершение Заказчиком следующих действий:
        </p>
        <ul className={styles.bulletList}>
          <li>Оплата Услуг Исполнителя в порядке, предусмотренном разделом 4 настоящего Договора.</li>
          <li>Использование функционала приложения "Match Ai" после оплаты подписки.</li>
        </ul>
        
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>2.2. </span>
          Совершение Заказчиком действий, указанных в п. 2.1 настоящего Договора, считается полным и 
          безоговорочным принятием Заказчиком всех условий настоящей Оферты.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>3. Предмет договора</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>3.1. </span>
          Исполнитель обязуется оказать Заказчику Услуги по предоставлению доступа к Telegram Mini App "Match Ai", 
          а Заказчик обязуется оплатить эти Услуги в соответствии с условиями настоящего Договора.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>3.2. </span>
          "Match Ai" предоставляет доступ к следующим функциям:
        </p>
        <ul className={styles.bulletList}>
          <li>Нейросетевой анализ футбольных матчей;</li>
          <li>Анализ данных и оценка возможных сценариев;</li>
          <li>Информационная модель распределения бюджета;</li>
          <li>Аналитическая обработка данных футбольных матчей.</li>
        </ul>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>3.3. </span>
          Используемые модели и алгоритмы являются инструментами для анализа данных и не предоставляют 
          инвестиционных, финансовых или иных рекомендаций.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>3.4. </span>
          Приложение Match Ai не является букмекерской платформой, не связано с букмекерскими конторами 
          и не участвует в приёме ставок. Доступная информация носит исключительно аналитический характер.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>4. Стоимость услуг и порядок расчетов</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>4.1. </span>
          Стоимость Услуг указана на сайте http://matchai.ru/ и зависит от выбранного тарифного плана и срока подписки.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>4.2. </span>
          Оплата Услуг производится Заказчиком на условиях 100% предоплаты путем перечисления денежных средств на счет Исполнителя.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>4.3. </span>
          Условия подписки:
        </p>
        <ul className={styles.bulletList}>
          <li>Пробный период 24 часа предоставляется новым пользователям бесплатно.</li>
          <li>После окончания пробного периода подписка становится платной – 389 рублей в месяц.</li>
          <li>Отмена подписки возможна в течение 14 дней, если Заказчик не запрашивал аналитические отчёты, 
              модели распределения бюджета или другие платные функции приложения.</li>
          <li>В случае начала использования платного функционала возврат не производится, за исключением 
              случаев технических неисправностей по вине Исполнителя.</li>
          <li>Оплата подписки осуществляется вручную при каждом продлении. Автоматическое списание средств 
              со счета Заказчика сервисом Match Ai не производится.</li>
          <li>Отмена подписки осуществляется через обращение в службу поддержки по адресу match.ai@mail.ru.</li>
        </ul>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>4.4. </span>
          Реквизиты для оплаты:
        </p>
        <ul className={styles.bulletList}>
          <li>Наименование сервиса: Match Ai</li>
          <li>ИНН: 650122903336</li>
          <li>Способы оплаты: Банковский перевод / СБП / Карта</li>
          <li>Сайт: http://matchai.ru/</li>
        </ul>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>4.5. </span>
          Доступ к функционалу приложения предоставляется в течение 24 часов после подтверждения оплаты.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>5. Ограничение ответственности</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>5.1. </span>
          Исполнитель не является финансовым консультантом, не даёт инвестиционных советов и не несёт 
          ответственности за любые финансовые решения, принятые Заказчиком на основании информации, 
          представленной в приложении Match Ai. Прогнозы и аналитика носят исключительно информационный 
          характер и не гарантируют фактический исход событий.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>5.2. </span>
          Исполнитель не несет ответственности за возможные убытки Заказчика, связанные с использованием 
          информации приложения.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>5.3. </span>
          Исполнитель не несёт ответственности за технические сбои в работе приложения, вызванные причинами, 
          не зависящими от Исполнителя, включая сбои в работе Telegram, серверов и хостинговых провайдеров.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>5.4. </span>
          Исполнитель использует открытые и сторонние источники данных, но не гарантирует их точность и актуальность.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>6. Возрастные ограничения</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>6.1. </span>
          Услуги доступны только для пользователей старше 18 лет.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>7. Конфиденциальность и обработка персональных данных</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>7.1. </span>
          Обработка персональных данных Заказчика осуществляется в соответствии с законодательством Российской Федерации.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>7.2. </span>
          Исполнитель обязуется не передавать персональные данные третьим лицам без согласия Заказчика.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>8. Срок действия и изменение условий оферты</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>8.1. </span>
          Оферта вступает в силу с момента размещения на сайте http://matchai.ru/ и действует до момента её отзыва Исполнителем.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>8.2. </span>
          Исполнитель уведомляет Заказчика об изменениях условий Оферты путём размещения новой редакции на сайте 
          и отправки уведомления в Telegram-канале поддержки. Продолжение использования сервиса после обновления 
          условий считается согласием Заказчика с новыми условиями.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>8.3. </span>
          Настоящий договор регулируется и толкуется в соответствии с законодательством Российской Федерации.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>9. Разрешение споров</h3>
        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>9.1. </span>
          Все споры и разногласия, возникающие в связи с исполнением настоящего Договора, Стороны будут 
          стремиться решить путём переговоров.
        </p>

        <p className={styles.subSection}>
          <span className={styles.subSectionNumber}>9.2. </span>
          В случае невозможности разрешения спора путем переговоров, спор передаётся на рассмотрение в 
          компетентный суд Российской Федерации.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>10. Контактные данные</h3>
        <div className={styles.contacts}>
          <p>📩 Электронная почта: match.ai@mail.ru</p>
          <p>💬 Telegram-канал поддержки: <a href="https://t.me/MatchAiSupport" target="_blank" rel="noopener noreferrer">https://t.me/MatchAiSupport</a></p>
          <p>🌐 Форма обратной связи: <a href="https://matchai.ru/support" target="_blank" rel="noopener noreferrer">https://matchai.ru/support</a></p>
        </div>
      </section>
    </div>
  );
}