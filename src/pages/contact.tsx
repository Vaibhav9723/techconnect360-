import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    
    form.reset();
  };

  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 bg-secondary text-white rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Let's start a conversation.</h1>
              <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                Whether you need a new POS system, a custom website, or a full digital transformation strategy, our team is ready to help.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[2rem] shadow-xl border border-border p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Form Side */}
              <div>
                <FadeIn>
                  <h2 className="text-3xl font-display font-bold mb-8">Send us a message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 bg-muted/50 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-secondary font-medium">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" className="h-12 bg-muted/50 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-secondary font-medium">Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 000-0000" className="h-12 bg-muted/50 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-medium">How can we help you?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project or needs..." 
                                className="min-h-[150px] bg-muted/50 rounded-xl resize-y" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto rounded-xl px-8"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </FadeIn>
              </div>

              {/* Info Side */}
              <div className="lg:pl-12 lg:border-l border-border flex flex-col justify-between">
                <FadeIn delay={0.2}>
                  <div className="mb-12">
                    <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form and our team will get back to you within 24 hours. You can also reach us directly via email or phone.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-secondary">Email Us</p>
                          <a href="mailto:hello@techconnect360.com" className="text-muted-foreground hover:text-primary transition-colors">
                            hello@techconnect360.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Phone className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-secondary">Call Us</p>
                          <a href="tel:+15551234567" className="text-muted-foreground hover:text-accent transition-colors">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold text-secondary">Visit Us</p>
                          <p className="text-muted-foreground">
                            123 Innovation Drive,<br />
                            Tech Valley, TX 75001
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-2xl border border-border/50">
                    <h4 className="font-bold text-lg mb-2">Business Hours</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between"><span>Monday - Friday:</span> <span>9:00 AM - 6:00 PM</span></li>
                      <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                      <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
