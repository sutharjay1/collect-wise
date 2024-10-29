import { benefitsContent } from "@/lib/content";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { P } from "../ui/typography";

const Features = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          {benefitsContent.title}
        </h2>
        <P className="mt-4 text-lg text-gray-600">
          {benefitsContent.description}
        </P>
      </div>

      <div className="md:grid-row-3 mt-12 grid grid-cols-1 gap-12">
        {benefitsContent.features.map((feature, index) => (
          <Card key={index} className=" ">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <P className="text-gray-600">{feature.description}</P>
            </CardContent>
            <CardFooter className="pt-4">
              <Button
                variant="ghost"
                className="ml-auto text-blue-600 hover:text-blue-800"
                asChild
              >
                <Link href={feature.cta.href}>{feature.cta.label}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
