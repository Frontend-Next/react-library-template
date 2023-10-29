import { Button, Input, Label } from "../../../lib/main";

export const Demo = () => {
  return (
    <>
      <div>Demo</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <Button>test</Button>
        </div>
        <div>
          <Input />
        </div>
        <div>
          <Label>label test</Label>
        </div>
      </div>
    </>
  );
};
