import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { FC } from "react";
import { aboutSchema } from "@/schemas/schema";

interface CvFormAboutSectionProps {}

const CvFormAboutSection: FC<CvFormAboutSectionProps> = () => {
  const form = useForm<z.infer<typeof aboutSchema>>({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      about: "",
    },
  });

  function onSubmit(values: z.infer<typeof aboutSchema>) {
    console.log(values);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Section</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Frontend Engineer focused on building products with extra attention to details"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-fit ml-auto">
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CvFormAboutSection;
