import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import BillCrestContent from "./billcrestContent";
import { useTranslation } from "react-i18next";

export default function Billcrest(props) {
  const { t } = useTranslation();
  return (
    <Dialog
      open={props.open}
      onClose={() => props.close(false)}
      scroll="paper"
      maxWidth="lg"
    >
      <h2 className="p-4 bg-[#161B22] text-white">BillCrest</h2>

      <DialogContent dividers>
        <BillCrestContent />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.close(false)}>
          <p className="text-white">{t("cancel")}</p>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
