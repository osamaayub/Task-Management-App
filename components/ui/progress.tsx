interface ProgressProps {
  value: number;
  className: string;
}

const Progress = ({ value, className }: ProgressProps) => {
  return (
    <div className="relative h-2 bg-gray-200 rounded-full">
      <div
        className={`h-full ${className} rounded-full`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;