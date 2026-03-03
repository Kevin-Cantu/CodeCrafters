"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SimpleCombobox, type ComboboxItem } from "@/components/ui/combobox";
import {
  User,
  Mail,
  Building2,
  Layers,
  MessageSquareText,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const projectTypes: ComboboxItem[] = [
  { value: "web", label: "Desarrollo Web" },
  { value: "mobile", label: "Aplicación Móvil" },
  { value: "api", label: "API/Backend" },
  { value: "consulting", label: "Consultoría" },
  { value: "other", label: "Otro" },
];

type ContactFormProps = {
  onSuccess?: (message: string) => void;
};

type FormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const schema = z.object({
  name: z.string().min(1, "el Nombre es obligatorio"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  company: z.string().min(1, "Empresa es obligatoria"),
  projectType: z.string().min(1, "Tipo de Proyecto es obligatorio"),
  message: z.string().optional().or(z.literal("")),
});

// Animated input field component
const AnimatedInput = ({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  children,
}: {
  icon: React.ElementType;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-300 mb-2"
      >
        {label} {required && <span className="text-pink-400">*</span>}
      </label>
      <div className="relative group">
        {/* Glow effect on focus */}
        <motion.div
          className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 ${focused ? "opacity-100" : ""
            }`}
          style={{ zIndex: 0 }}
        />

        <div className="relative flex items-center">
          <motion.div
            className={`absolute left-4 z-10 transition-colors duration-300 ${focused ? "text-blue-400" : "text-slate-400"
              }`}
            animate={{ scale: focused ? 1.1 : 1 }}
          >
            <Icon className="h-5 w-5" />
          </motion.div>

          {children || (
            <input
              type={type}
              id={name}
              name={name}
              required={required}
              value={value}
              onChange={onChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder={placeholder}
              className={`relative w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/80 border text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300 ${error
                ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                : focused
                  ? "border-transparent"
                  : "border-slate-700/50 hover:border-slate-600"
                }`}
            />
          )}
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-xs text-red-400 flex items-center gap-1"
          >
            <span className="w-1 h-1 rounded-full bg-red-400" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof FormData;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setSubmitting(true);
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        projectType: formData.projectType,
        message: formData.message,
      };

      const response = await emailjs.send(
        "service_f74t434",
        "template_22qckiz",
        templateParams,
        "qZWpiXXlxCTGAjjyx"
      );
      console.log("Correo enviado!", response.status, response.text);
      onSuccess?.("Mensaje enviado con éxito.");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      id="contacto-form"
      className="relative group scroll-mt-36"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 group-hover:opacity-80 transition-opacity duration-700 blur-sm" />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Container */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-800/50 shadow-2xl backdrop-blur-xl p-8 sm:p-10 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Header */}
        <div className="relative mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >

            <Sparkles className="w-3.5 h-3.5 text-blue-400" />

            <span className="text-xs font-medium text-blue-300">
              Respueta en 24h
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Cuéntanos sobre tu proyecto
          </motion.h2>

          <motion.p
            className="text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tu información está segura con nosotros. Te responderemos pronto.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          noValidate
          onSubmit={handleSubmit}
          className="relative space-y-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
        >
          {/* Name and Email row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <AnimatedInput
              icon={User}
              label="Nombre"
              name="name"
              placeholder="Juan Pérez"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <AnimatedInput
              icon={Mail}
              label="Email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
          </motion.div>

          {/* Company */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <AnimatedInput
              icon={Building2}
              label="Empresa"
              name="company"
              placeholder="Nombre de tu empresa"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              required
            />
          </motion.div>

          {/* Project Type */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Tipo de Proyecto <span className="text-pink-400">*</span>
            </label>
            <div className="relative group">
              <motion.div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 ${focusedField === "projectType" ? "opacity-100" : ""
                  }`}
                style={{ zIndex: 0 }}
              />

              <div className="relative flex items-center">
                <motion.div
                  className={`absolute left-4 z-10 transition-colors duration-300 ${focusedField === "projectType"
                    ? "text-blue-400"
                    : "text-slate-400"
                    }`}
                >
                  <Layers className="h-5 w-5" />
                </motion.div>

                <div
                  className="relative w-full"
                  onFocus={() => setFocusedField("projectType")}
                  onBlur={() => setFocusedField(null)}
                >
                  <SimpleCombobox
                    id="projectType"
                    items={projectTypes}
                    value={formData.projectType}
                    onChange={(val) => {
                      setFormData((prev) => ({ ...prev, projectType: val }));
                      setErrors((prev) => ({
                        ...prev,
                        projectType: undefined,
                      }));
                    }}
                    placeholder="Seleccionar..."
                    searchPlaceholder="Buscar tipo..."
                    emptyMessage="Sin resultados"
                    contentClassName="bg-slate-900 text-white border-slate-700"
                    commandClassName="bg-transparent"
                    buttonClassName={`pl-12 pr-4 py-3.5 bg-slate-900/80 border ${errors.projectType
                      ? "border-red-500"
                      : "border-slate-700/50 hover:border-slate-600"
                      } rounded-xl w-full text-left`}
                  />
                </div>
              </div>
            </div>

            <AnimatePresence>
              {errors.projectType && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 text-xs text-red-400 flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  {errors.projectType}
                </motion.p>
              )}
            </AnimatePresence>

            <p className="mt-2 text-xs text-slate-500">
              Esto nos ayuda a asignar el equipo adecuado.
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Mensaje
            </label>
            <div className="relative group">
              <motion.div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 ${focusedField === "message" ? "opacity-100" : ""
                  }`}
                style={{ zIndex: 0 }}
              />

              <div className="relative">
                <motion.div
                  className={`absolute left-4 top-4 z-10 transition-colors duration-300 ${focusedField === "message"
                    ? "text-blue-400"
                    : "text-slate-400"
                    }`}
                >
                  <MessageSquareText className="h-5 w-5" />
                </motion.div>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Cuéntanos más detalles sobre tu proyecto, objetivos y plazos..."
                  className={`relative w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/80 border text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300 resize-none ${errors.message
                    ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                    : focusedField === "message"
                      ? "border-transparent"
                      : "border-slate-700/50 hover:border-slate-600"
                    }`}
                />
              </div>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Cuanto más contexto nos des, mejor podremos ayudarte.
            </p>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="pt-2"
          >
            <motion.button
              type="submit"
              disabled={submitting}
              className="group relative w-full overflow-hidden rounded-2xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: submitting ? 1 : 1.01 }}
              whileTap={{ scale: submitting ? 1 : 0.99 }}
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:opacity-90" />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl" />
              </div>

              <span className="relative z-10 flex items-center justify-center gap-2">
                {submitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Enviando…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </motion.button>
          </motion.div>

          {/* Privacy note */}
          <motion.p
            className="text-xs text-slate-500 text-center flex items-center justify-center gap-2"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            Al enviar, aceptas nuestra política de privacidad.
          </motion.p>
        </motion.form>
      </div>
    </motion.div>
  );
}
