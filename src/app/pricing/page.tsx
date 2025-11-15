"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 9,
    credits: 30,
    popular: false,
    features: [
      "30 generaciones de plushies",
      "Salida de alta calidad",
      "Descarga en formato PNG",
      "Soporte por correo",
      "Créditos que nunca expiran",
    ],
  },
  {
    name: "Pro",
    price: 19,
    credits: 100,
    popular: true,
    features: [
      "100 generaciones de plushies",
      "Salida de alta calidad",
      "Descarga en formato PNG",
      "Soporte prioritario por correo",
      "Créditos que nunca expiran",
      "Acceso temprano a nuevas funciones",
    ],
  },
  {
    name: "Elite",
    price: 29,
    credits: 200,
    popular: false,
    features: [
      "200 generaciones de plushies",
      "Salida de calidad más alta",
      "Descarga en PNG y SVG",
      "Soporte prioritario 24/7",
      "Créditos que nunca expiran",
      "Acceso temprano a nuevas funciones",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Compra Créditos para Generar Plushies
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Elige el plan perfecto para ti. Todos los créditos son de pago único
          y nunca expiran.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${
              plan.popular
                ? "border-pink-500 border-2 shadow-xl scale-105"
                : "border-border"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-8 pt-8">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">(pago único)</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="h-5 w-5 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-purple-500" />
                      </div>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-pink-500 hover:bg-pink-600"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trust Section */}
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          Pago seguro procesado a través de Stripe. Todos los créditos son de
          un solo pago y nunca expiran.
        </p>
      </div>
    </div>
  );
}
