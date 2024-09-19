import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card {...({} as any)} color="transparent" shadow={false}>
      <CardBody {...({} as any)} className="grid place-items-start px-0">
        <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900">
          <Icon className="h-6 w-6" />
        </div>
        <Typography
          {...({} as any)}
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          {title}
        </Typography>
        <Typography {...({} as any)} className="text-gray-500 font-normal">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default FeatureCard;
