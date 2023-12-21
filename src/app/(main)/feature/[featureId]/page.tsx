type Props = {
  params: {
    featureId: string;
  };
};
export default function FeatureId({ params }: Props) {
  return <>feature id is {params.featureId}</>;
}
