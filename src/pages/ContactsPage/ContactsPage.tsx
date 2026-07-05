import { useState, type FormEvent } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { Button } from '@/components/common/Button/Button';
import { MapPinIcon } from '@/components/icons/MapPinIcon';
import { MailIcon } from '@/components/icons/MailIcon';
import { PhoneIcon } from '@/components/icons/PhoneIcon';
import { contactInfo } from '@/data/contactInfo';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import './ContactsPage.scss';

export function ContactsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();
  const t = useTranslation();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="contacts-page">
      <div className="container">
        <SectionHeading eyebrow={t.contacts.eyebrow} title={t.contacts.title} align="left" />

        <div className="contacts-page__layout">
          <div className="contacts-page__info">
            <div>
              <h3>
                <MapPinIcon aria-hidden="true" />
                {t.contacts.addressLabel}
              </h3>
              <p>{contactInfo.address[language]}</p>
            </div>
            <div>
              <h3>
                <MailIcon aria-hidden="true" />
                {t.contacts.emailLabel}
              </h3>
              <p>{contactInfo.email}</p>
            </div>
            <div>
              <h3>
                <PhoneIcon aria-hidden="true" />
                {t.contacts.phoneLabel}
              </h3>
              <p>{contactInfo.phone}</p>
            </div>
          </div>

          <div className="contacts-page__form-wrap">
            {isSubmitted ? (
              <div className="contacts-page__success" role="status">
                <h3>{t.contacts.successTitle}</h3>
                <p>{t.contacts.successText}</p>
              </div>
            ) : (
              <form className="contacts-page__form" onSubmit={handleSubmit}>
                <div className="contacts-page__field">
                  <label htmlFor="contact-name">{t.contacts.formName}</label>
                  <input id="contact-name" name="name" type="text" required />
                </div>
                <div className="contacts-page__field">
                  <label htmlFor="contact-email">{t.contacts.formEmail}</label>
                  <input id="contact-email" name="email" type="email" required />
                </div>
                <div className="contacts-page__field">
                  <label htmlFor="contact-message">{t.contacts.formMessage}</label>
                  <textarea id="contact-message" name="message" rows={5} required />
                </div>
                <Button type="submit">{t.contacts.submit}</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
