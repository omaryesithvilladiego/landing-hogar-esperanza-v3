import { useFormik } from "formik";
import Swal from "sweetalert2";
import styles from "./styles/styles.module.css";
import { borel, roboto } from "@/app/fonts";
import programs from "../../../../public/data/plans";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  age: number;
  selectedPlan: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  age?: string;
  selectedPlan?: string;
  message?: string;
}

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    if (!values.name.trim()) {
      errors.name = "El nombre es obligatorio.";
    }

    if (!values.email.trim()) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Correo electrónico inválido.";
    }

    if (!values.phone.trim()) {
      errors.phone = "El teléfono es obligatorio.";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "El teléfono debe tener 10 dígitos.";
    }

    if (!values.age) {
      errors.age = "La edad es obligatoria.";
    } else if (values.age < 0 || values.age > 120) {
      errors.age = "Por favor ingrese una edad válida.";
    }

    if (!values.selectedPlan) {
      errors.selectedPlan = "Por favor seleccione un plan.";
    }

    if (!values.message.trim()) {
      errors.message = "El mensaje es obligatorio.";
    }

    return errors;
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: 0,
      selectedPlan: "",
      message: "",
    },
    validate,
    onSubmit: async (values: FormValues, { resetForm }) => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/contacto", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado",
            text: result.message || "Gracias por contactarnos.",
          });
          resetForm();
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: result.message || "Hubo un problema. Inténtalo más tarde.",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar el mensaje.",
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className={styles.contactSection} id="contacto">
      <section className={styles.textSection}>
        <div className={styles.wraperSectionText}>
          <h2 className={borel.className}>contáctanos</h2>
          <p className={roboto.className}>
            Contáctanos hoy mismo para obtener más información sobre nuestros
            servicios y programas diseñados para mejorar la calidad de vida de
            los adultos mayores. Nuestro equipo de profesionales estará
            encantado de atenderte y guiarte a través del proceso de
            inscripción.
          </p>
        </div>
      </section>

      <form
        onSubmit={formik.handleSubmit}
        className={`${styles.contactForm} ${roboto.className}`}
      >
        <div className="form-group">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.input} ${
              formik.touched.name && formik.errors.name ? "input-error" : ""
            }`}
          />
          {formik.touched.name && formik.errors.name && (
            <div className={styles.errorMessage}>{formik.errors.name}</div>
          )}
        </div>

        <div className={styles.formGroup}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.input} ${
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>

        <div className={styles.formGroup}>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Teléfono"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.input} ${
              formik.touched.phone && formik.errors.phone ? "input-error" : ""
            }`}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error-message">{formik.errors.phone}</div>
          )}
        </div>

        <div className={styles.formGroup}>
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Edad"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.input} ${
              formik.touched.age && formik.errors.age ? "input-error" : ""
            }`}
          />
          {formik.touched.age && formik.errors.age && (
            <div className="error-message">{formik.errors.age}</div>
          )}
        </div>

        <div className={styles.formGroup}>
          <select
            id="selectedPlan"
            name="selectedPlan"
            value={formik.values.selectedPlan}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.input} ${
              formik.touched.selectedPlan && formik.errors.selectedPlan
                ? "input-error"
                : ""
            }`}
          >
            <option value="">Seleccione un plan</option>
            {programs.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.nombre}
              </option>
            ))}
          </select>
          {formik.touched.selectedPlan && formik.errors.selectedPlan && (
            <div className="error-message">{formik.errors.selectedPlan}</div>
          )}
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.input} ${
              formik.touched.message && formik.errors.message
                ? "input-error"
                : ""
            }`}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="error-message">{formik.errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          style={{ cursor: "pointer" }}
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      <div />
    </div>
  );
};
