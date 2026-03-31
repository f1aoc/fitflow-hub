import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Dumbbell,
  HeartPulse,
  Trophy,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fitness.jpg";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Dumbbell,
    title: "Musculation premium",
    text: "Plateau complet, machines guidées, poids libres et zone fonctionnelle pour progresser à votre rythme.",
  },
  {
    icon: HeartPulse,
    title: "Remise en forme",
    text: "Programmes cardio, perte de poids et tonification pour retrouver énergie, mobilité et confiance.",
  },
  {
    icon: Trophy,
    title: "Coaching personnalisé",
    text: "Un accompagnement structuré avec bilan, plan d'entraînement et suivi régulier orienté résultats.",
  },
  {
    icon: Users,
    title: "Cours & motivation",
    text: "Une ambiance motivante, des coachs présents et une communauté engagée pour garder le cap.",
  },
];

const testimonials = [
  {
    name: "Sophie",
    role: "Objectif perte de poids",
    text: "J'ai repris confiance en moi. Le suivi est sérieux, l'équipe est motivante et les résultats sont concrets.",
  },
  {
    name: "Lucas",
    role: "Prise de masse",
    text: "Salle moderne, ambiance premium et vrai accompagnement. J'ai enfin une méthode claire pour progresser.",
  },
  {
    name: "Emma",
    role: "Remise en forme",
    text: "Lovable m'a aidée à reprendre une routine durable. C'est pro, rassurant et très efficace.",
  },
];

const faqs = [
  {
    q: "Proposez-vous une séance d'essai ?",
    a: "Oui, une séance découverte est mise en avant pour faciliter le premier passage à l'action et augmenter les prises de contact.",
  },
  {
    q: "Le coaching est-il adapté aux débutants ?",
    a: "Oui, le positionnement du site rassure les débutants comme les pratiquants confirmés avec un accompagnement personnalisé.",
  },
  {
    q: "Puis-je être recontacté rapidement ?",
    a: "Oui, le formulaire est pensé conversion avec un message court, des champs essentiels et des CTA visibles sur toute la page.",
  },
  {
    q: "Quels résultats puis-je viser ?",
    a: "Perte de poids, prise de muscle, tonification, remise en forme générale ou amélioration de la condition physique.",
  },
];

const stats = [
  { value: "2 500+", label: "membres accompagnés" },
  { value: "98%", label: "de satisfaction" },
  { value: "12", label: "coachs experts" },
  { value: "7j/7", label: "pour vous entraîner" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#accueil" className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight">
            <Dumbbell className="h-6 w-6 text-primary" />
            Lovable
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button size="sm" className="rounded-full">
              Séance offerte
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* TOP BAR */}
        <div className="gradient-hero">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-sm text-hero-dark-foreground/80 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-highlight text-highlight" />
              4,9/5 sur plus de 850 avis
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-highlight" />
              Séance découverte offerte
            </p>
          </div>
        </div>

        {/* HERO */}
        <section id="accueil" className="gradient-hero py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="space-y-8">
                <Badge className="bg-primary/15 text-primary hover:bg-primary/20 border-0 font-medium">
                  Fitness • Musculation • Remise en forme
                </Badge>
                <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-hero-dark-foreground sm:text-5xl lg:text-6xl">
                  Transformez votre corps.{" "}
                  <span className="text-gradient">Convertissez votre motivation en résultats.</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-hero-dark-foreground/70">
                  Un accompagnement pensé pour convertir : message clair, offres rassurantes, preuve sociale et appels à l'action visibles à chaque étape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="rounded-full text-base">
                    Réserver ma séance offerte
                  </Button>
                  <Button variant="heroOutline" size="lg" className="rounded-full text-base">
                    Découvrir les services
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-hero-dark-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Coaching sur mesure
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Essai gratuit
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Suivi orienté résultats
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
                  <img
                    src={heroImage}
                    alt="Salle de fitness premium avec équipement moderne"
                    className="aspect-[4/3] w-full object-cover"
                    width={1280}
                    height={896}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/40 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-heading text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Badge className="bg-accent text-accent-foreground border-0 mb-4">Services</Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Une structure conçue pour convaincre vite
              </h2>
              <p className="mt-4 text-muted-foreground">
                Chaque bloc répond à une objection client : besoin, preuve, accompagnement, résultats et passage à l'action.
              </p>
            </motion.div>

            <motion.div
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title} variants={fadeUp}>
                    <Card className="group h-full border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                      <CardContent className="flex flex-col gap-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-heading text-lg font-semibold">{service.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                        <button className="mt-auto flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                          Demander des infos <ArrowRight className="h-4 w-4" />
                        </button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="apropos" className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Badge className="bg-accent text-accent-foreground border-0">À propos</Badge>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Une marque fitness rassurante, premium et orientée résultats
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cette approche met en avant la clarté du positionnement, la crédibilité de l'accompagnement et la simplicité du parcours utilisateur. Le but est de limiter la friction et d'augmenter les demandes d'essai ou de rendez-vous.
                </p>
                <div className="space-y-3">
                  {[
                    "Positionnement premium et clair",
                    "CTA visibles dès l'arrivée",
                    "Preuve sociale intégrée",
                    "Parcours mobile-first",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-bold mb-6">Pourquoi cette version convertit mieux</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-heading font-semibold text-primary">1. Proposition de valeur immédiate</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Le visiteur comprend en quelques secondes ce que fait Lovable et pourquoi passer à l'action.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-primary">2. Réassurance visuelle</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Statistiques, avis, promesse d'accompagnement et ton premium créent la confiance.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-primary">3. Conversion simplifiée</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Le formulaire est accessible, les CTA sont répétés et la FAQ lève les objections sans friction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Badge className="bg-accent text-accent-foreground border-0 mb-4">Preuve sociale</Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Ils nous font confiance
              </h2>
            </motion.div>

            <motion.div
              className="mt-12 grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {testimonials.map((t) => (
                <motion.div key={t.name} variants={fadeUp}>
                  <Card className="h-full border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-4 w-4 fill-highlight text-highlight" />
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
                      <div className="mt-auto">
                        <p className="font-heading font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Badge className="bg-accent text-accent-foreground border-0 mb-4">FAQ</Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Levez les dernières objections
              </h2>
              <p className="mt-4 text-muted-foreground">
                Une bonne FAQ réduit les hésitations, rassure les prospects et améliore le taux de prise de contact.
              </p>
            </motion.div>

            <motion.div
              className="mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="rounded-xl border border-border/50 bg-background px-6 data-[state=open]:shadow-md"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Badge className="bg-accent text-accent-foreground border-0">Contact</Badge>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Réservez votre séance d'essai
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le formulaire ci-dessous est volontairement simple pour favoriser les conversions : moins de friction, plus de demandes.
                </p>
                <div className="space-y-4 text-sm">
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" /> Adresse de la salle / ville
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 shrink-0 text-primary" /> 01 23 45 67 89
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 shrink-0 text-primary" /> contact@lovable-fit.fr
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-5 w-5 shrink-0 text-primary" /> Ouvert 7j/7
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="border-border/50 shadow-lg shadow-primary/5">
                  <CardContent className="p-8">
                    <div className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input placeholder="Prénom" className="h-12 rounded-xl" />
                        <Input placeholder="Email" type="email" className="h-12 rounded-xl" />
                      </div>
                      <Textarea placeholder="Votre objectif ou message..." className="min-h-[120px] rounded-xl resize-none" />
                      <Button className="h-12 w-full rounded-xl text-base font-semibold">
                        Demander mon essai gratuit
                      </Button>
                      <p className="text-xs leading-5 text-muted-foreground">
                        En cliquant, l'utilisateur comprend clairement l'action attendue. C'est un levier direct pour améliorer le taux de conversion.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© Lovable — Maquette premium fitness orientée conversion.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#accueil" className="transition-colors hover:text-foreground">Accueil</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
