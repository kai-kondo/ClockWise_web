import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function CourseCard({ img, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <Card {...({} as any)} color="transparent" shadow={false}>
      <CardHeader
        {...({} as any)}
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody {...({} as any)} className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography {...({} as any)} variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography
          {...({} as any)}
          className="mb-6 font-normal !text-gray-500"
        >
          {desc}
        </Typography>
        <Button {...({} as any)} color="gray" size="sm">
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
