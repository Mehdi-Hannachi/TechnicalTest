import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

export default function MyCard() {
  return (
    <Card className="w-full max-w-[9rem] m-2">
      <Button size="sm">test</Button>
      <CardBody>test</CardBody>
      <CardFooter className="pt-3">
        <Button size="sm" className="mb-2" fullWidth={true}>
          test
        </Button>
      </CardFooter>
    </Card>
  );
}
