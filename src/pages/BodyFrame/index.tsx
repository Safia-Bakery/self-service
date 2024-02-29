import OrdersList from "../../components/OrdersList";
import useOrders from "@/hooks/useOrders";
import Loading from "../../components/Loader";
import ShowOrder from "../../components/ShowOrder";

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
