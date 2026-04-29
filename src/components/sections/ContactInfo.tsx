"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: siteConfig.links.email,
    link: `mailto:${siteConfig.links.email}`,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: siteConfig.links.phone,
    link: `tel:${siteConfig.links.phone}`,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Nuevo León, México",
    link: "#",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: Instagram,
    gradient: "from-pink-500 to-rose-500",
    hoverColor: "hover:text-pink-400",
  },
  {
    name: "Facebook",
    href: siteConfig.links.facebook,
    icon: Facebook,
    gradient: "from-blue-500 to-blue-600",
    hoverColor: "hover:text-blue-400",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      className="relative group w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 group-hover:opacity-80 transition-opacity duration-700 blur-sm" />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Card */}
      <div className="relative rounded-3xl border border-slate-800/50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
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
            transition={{ delay: 0.3 }}
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium text-blue-300">
              Contacto directo
            </span>
          </motion.div>

          <h2 className="text-2xl font-bold text-white mb-2">
            Información de Contacto
          </h2>
          <p className="text-slate-400">
            Estamos aquí para ayudarte. Escríbenos por cualquiera de estos
            medios o utiliza el formulario.
          </p>
        </div>

        {/* Contact items */}
        <div className="relative space-y-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group/item"
            >
              {item.link !== "#" ? (
                <a
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-slate-400">
                      {item.title}
                    </h3>
                    <p className="text-white font-medium truncate">{item.content}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-slate-500 group-hover/item:text-white group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300" />
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 overflow-hidden">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-slate-400">
                      {item.title}
                    </h3>
                    <p className="text-white font-medium truncate">{item.content}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <div className="relative mt-8 pt-8 border-t border-slate-800/50">
          <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className={`group/social flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/30 border border-slate-700/30 text-white ${social.hoverColor} hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300`}
                >
                  <social.icon className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap">{social.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/social:opacity-100 transition-opacity shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Response time badge */}
        <motion.div
          className="relative mt-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-white"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Respuesta rápida</p>
              <p className="text-xs text-emerald-300">
                Normalmente respondemos en menos de 24 horas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
