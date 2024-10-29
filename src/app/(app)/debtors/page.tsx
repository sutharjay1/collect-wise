import Grid from "@/components/global/grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H4 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const Debtors = () => {
  return (
    <div className={cn("relative z-20 mx-auto w-full md:px-3")}>
      <div className="mx-auto flex w-full flex-col">
        <Grid.Border />
        <div className="relative grid w-full grid-rows-1 gap-6 px-8 sm:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Debtors</CardTitle>

              <Button variant="default" className="px-5">
                Link Bank
              </Button>
            </CardHeader>
          </Card>
          <CardContent>
            <H4 className="font-medium">Bank Account:</H4>
          </CardContent>
          <Grid.Line showHorizontal={false} showVertical={false} />
        </div>

        <Grid.Border isBottom />
      </div>
    </div>
  );
};

export default Debtors;
