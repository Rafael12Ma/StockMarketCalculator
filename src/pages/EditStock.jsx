import { lazy, Suspense } from "react";

export default function StockEdit() {
  const EditStock = lazy(() => import("../components/EditStockHelper"));
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Data restored</p>}>
        <EditStock />
      </Suspense>
    </>
  );
}
