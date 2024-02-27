import OrdersList from "../OrdersList";
import useOrders from "@/hooks/useOrders";
import Loading from "../Loader";
import ShowOrder from "../ShowOrder";

const BodyFrame = () => {
  const { isLoading } = useOrders({});

  if (isLoading) return <Loading absolute />;

  return (
    <div className="overflow-auto flex flex-col flex-1">
      <OrdersList />
      <ShowOrder />
    </div>
  );
};

export default BodyFrame;
