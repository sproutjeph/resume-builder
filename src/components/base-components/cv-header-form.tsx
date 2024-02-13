import { FC } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

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
import { headerSchema } from "@/schemas/HeaderSchema";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CvFormProps {}

const CvForm: FC<CvFormProps> = () => {
  const form = useForm<z.infer<typeof headerSchema>>({
    resolver: zodResolver(headerSchema),
    defaultValues: {
      name: "",
      summary: "",
      email: "",
      phone: "",
      socialLink1: "",
      socialLink2: "",
      socialLink3: "",
    },
  });

  function onSubmit(values: z.infer<typeof headerSchema>) {
    console.log(values);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Head Section</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary</FormLabel>
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
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
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
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+234888888" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialLink1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Social Link(s)</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input placeholder="https://github.com" {...field} />
                      <Button size="icon" type="button" variant="outline">
                        <Plus />
                      </Button>
                    </div>
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

export default CvForm;
