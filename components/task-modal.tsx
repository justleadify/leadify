import type { NextPage } from "next";
import Image from "next/image";
import DatePicker from "./date-picker";
import TextArea from "./text-area";
import TextField from "./text-field";

export type TaskModalType = {
  className?: string;

  /** Variant props */
  type?: string;
};

const TaskModal: NextPage<TaskModalType> = ({
  className = "",
  type = "Task Details",
}) => {
  return (
    <div
      className={`absolute top-[13.2px] left-[33px] shadow-[0px_3.5px_31.4px_rgba(150,_150,_150,_0.16)] rounded-6xs bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.9px] border-solid box-border w-[558.9px] flex flex-col items-start justify-start py-[20.9px] px-0 gap-[20.9px] text-left text-base-7 text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
      data-type={type}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 px-[20.9px]">
        <div className="relative font-medium">Monthly Product Discussion</div>
        <Image
          className="h-[17.4px] w-[17.4px] relative"
          width={17}
          height={17}
          alt=""
          src="/iconx-1.svg"
        />
      </div>
      <Image
        className="self-stretch h-[0.9px] relative max-w-full overflow-hidden max-h-full"
        width={558}
        height={1}
        alt=""
        src="/separator-5.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[20.9px] gap-[17.4px] text-smi-2">
        <div className="self-stretch flex flex-row items-start justify-start gap-[17.4px]">
          <div className="flex flex-col items-start justify-start gap-[7px]">
            <div className="relative leading-[150%] font-medium">Members</div>
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <div className="flex flex-row items-center justify-end">
                <Image
                  className="h-[31.4px] w-[31.4px] rounded-xl-9 object-cover"
                  width={31}
                  height={31}
                  alt=""
                  src="/projects@2x.png"
                />
                <Image
                  className="h-[31.4px] w-[31.4px] rounded-xl-9 object-cover ml-[-10.5px]"
                  width={31}
                  height={31}
                  alt=""
                  src="/projects1@2x.png"
                />
                <Image
                  className="h-[31.4px] w-[31.4px] rounded-xl-9 object-cover ml-[-10.5px]"
                  width={31}
                  height={31}
                  alt=""
                  src="/projects2@2x.png"
                />
                <Image
                  className="h-[31.4px] w-[31.4px] rounded-xl-9 object-cover ml-[-10.5px]"
                  loading="lazy"
                  width={31}
                  height={31}
                  alt=""
                  src="/frame-5520@2x.png"
                />
              </div>
              <div className="rounded-border-radius-100 border-color-tokens-content-dark-primary border-[0.9px] border-solid flex flex-row items-center justify-center p-[8.7px]">
                <Image
                  className="w-[17.4px] relative h-[17.4px]"
                  width={17}
                  height={17}
                  alt=""
                  src="/iconuserplus.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[7px]">
            <div className="relative leading-[150%] font-medium">Labels</div>
            <div className="flex flex-row items-center justify-start gap-[7px] text-color-tokens-interaction-orange-base">
              <div className="rounded-9xs-5 bg-color-tokens-background-orange flex flex-row items-center justify-center py-[5.2px] px-[7px] gap-[7px]">
                <div className="relative leading-[150%] font-medium">
                  Internal
                </div>
                <Image
                  className="w-3.5 relative h-3.5 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/icon--cancel.svg"
                />
              </div>
              <div className="rounded-9xs-5 bg-color-tokens-background-yellow flex flex-row items-center justify-center py-[5.2px] px-[7px] gap-[7px] text-color-tokens-interaction-yellow-base">
                <div className="relative leading-[150%] font-medium">
                  Marketing
                </div>
                <Image
                  className="w-3.5 relative h-3.5 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/icon--cancel.svg"
                />
              </div>
              <div className="rounded-border-radius-100 border-color-tokens-content-dark-primary border-[0.9px] border-solid flex flex-row items-center justify-center p-[8.7px]">
                <Image
                  className="w-[17.4px] relative h-[17.4px]"
                  width={17}
                  height={17}
                  alt=""
                  src="/icontag.svg"
                />
              </div>
            </div>
          </div>
          <DatePicker
            lightMode
            property1="Filled"
            showLogo={false}
            showIconLeft
            showMorePillars={false}
            showIconRight
            editLable="Due Date"
            showValue
            editSubtitle="Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)"
            showSubtitle={false}
            editPlaceholder="24 Jan 2023"
            showPillars={false}
            showFlag={false}
            showLabel
          />
        </div>
        <TextArea
          property1="Default"
          showSubtitle={false}
          editCaption="We will notify the customer and issue a full refund"
          editSuffix="0/50"
          showValue
          showSuffix={false}
          editPlaceholder="Monthly Product Discussion by Design and Marketing Teams with CEO to Plan our future products sales and reports"
          editLable="Description"
          editSubtitle="Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)"
          showCaption={false}
          showLabel
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-color-tokens-content-dark-tertiary">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-3.5">
              <TextField
                property1="Default"
                showSuffix={false}
                showCaption={false}
                showIconRight={false}
                editSuffix="0/50"
                showValue
                editPlaceholder="Daily Sprint"
                showRightIcon={false}
                editCaption="We will notify the customer and issue a full refund"
                editLable="Task Checklist"
                editSubtitle="Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)"
                showSubtitle={false}
                showLabel
                showPillars={false}
                showLeftIcon={false}
                showPrefix={false}
                iconArrowDown="/icon--arrow-down-1.svg"
                iconMagnifyingGlass1="/iconmagnifyingglass1.svg"
                iconSearch="/icon--search.svg"
              />
              <div className="rounded-border-radius-4 flex flex-row items-center justify-center py-[7px] px-[10.5px] gap-[7px] text-3xs-6 text-color-tokens-content-dark-secondary">
                <Image
                  className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus.svg"
                />
                <div className="relative leading-[14px] font-medium">
                  Delete
                </div>
                <Image
                  className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus1.svg"
                />
              </div>
              <button className="cursor-pointer border-color-tokens-content-dark-primary border-[0.9px] border-solid py-[7px] px-[10.5px] bg-color-tokens-background-primary rounded-9xs-5 flex flex-row items-center justify-center gap-[7px]">
                <Image
                  className="w-3.5 relative h-3.5"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus.svg"
                />
                <div className="relative text-3xs-6 leading-[14px] font-medium font-body-extra-large-semibold text-color-tokens-content-dark-primary text-left">
                  Add Item
                </div>
                <Image
                  className="w-3.5 relative h-3.5 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus2.svg"
                />
              </button>
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px] text-color-tokens-content-dark-secondary">
              <div className="w-[516.2px] flex flex-row items-center justify-start py-[3.5px] px-0 box-border gap-[7px]">
                <input
                  className="m-0 h-[17.4px] w-[17.4px] relative rounded-9xs-5 overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[20.9px]">
                  Prepare Design Document
                </div>
                <Image
                  className="h-[17.4px] w-[17.4px] relative"
                  width={17}
                  height={17}
                  alt=""
                  src="/icondotsthreevertical-1.svg"
                />
              </div>
              <div className="w-[516.2px] flex flex-row items-center justify-start py-[3.5px] px-0 box-border gap-[7px]">
                <input
                  className="m-0 h-[17.4px] w-[17.4px] relative rounded-9xs-5 overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[20.9px]">
                  Document Signature
                </div>
                <Image
                  className="h-[17.4px] w-[17.4px] relative"
                  width={17}
                  height={17}
                  alt=""
                  src="/icondotsthreevertical-1.svg"
                />
              </div>
              <div className="w-[516.2px] flex flex-row items-center justify-start py-[3.5px] px-0 box-border gap-[7px]">
                <input
                  className="m-0 h-[17.4px] w-[17.4px] relative rounded-9xs-5 overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[20.9px]">
                  Pitch Deck Presentation Design
                </div>
                <Image
                  className="h-[17.4px] w-[17.4px] relative"
                  width={17}
                  height={17}
                  alt=""
                  src="/icondotsthreevertical-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-3xs-6 text-color-tokens-content-dark-secondary">
            <div className="self-stretch flex flex-row items-center justify-start gap-3.5">
              <TextField
                property1="Default"
                showSuffix={false}
                showCaption={false}
                showIconRight={false}
                editSuffix="0/50"
                showValue
                editPlaceholder="Daily Sprint"
                showRightIcon={false}
                editCaption="We will notify the customer and issue a full refund"
                editLable="Daily Sprint"
                editSubtitle="Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)"
                showSubtitle={false}
                showLabel
                showPillars={false}
                showLeftIcon={false}
                showPrefix={false}
                iconMagnifyingGlass1="/iconmagnifyingglass1.svg"
                iconSearch="/icon--search.svg"
              />
              <div className="rounded-border-radius-4 flex flex-row items-center justify-center py-[7px] px-[10.5px] gap-[7px]">
                <Image
                  className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus.svg"
                />
                <div className="relative leading-[14px] font-medium">
                  Delete
                </div>
                <Image
                  className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus1.svg"
                />
              </div>
              <button className="cursor-pointer border-color-tokens-content-dark-primary border-[0.9px] border-solid py-[7px] px-[10.5px] bg-color-tokens-background-primary rounded-9xs-5 flex flex-row items-center justify-center gap-[7px]">
                <Image
                  className="h-3.5 w-3.5 relative"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus.svg"
                />
                <div className="relative text-3xs-6 leading-[14px] font-medium font-body-extra-large-semibold text-color-tokens-content-dark-primary text-left">
                  Add Item
                </div>
                <Image
                  className="w-3.5 relative h-3.5 hidden"
                  width={14}
                  height={14}
                  alt=""
                  src="/iconplus2.svg"
                />
              </button>
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px] text-smi-2">
              <div className="w-[516.2px] flex flex-row items-center justify-start py-[3.5px] px-0 box-border gap-[7px]">
                <input
                  className="m-0 h-[17.4px] w-[17.4px] relative rounded-9xs-5 overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[20.9px]">
                  Prepare Design Document
                </div>
                <input
                  className="m-0 h-[17.4px] w-[17.4px] relative"
                  type="checkbox"
                />
              </div>
              <div className="w-[516.2px] flex flex-row items-center justify-start py-[3.5px] px-0 box-border gap-[7px]">
                <input
                  className="m-0 h-[17.4px] w-[17.4px] relative rounded-9xs-5 overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[20.9px]">
                  Document Signature
                </div>
                <input
                  className="m-0 h-[17.4px] w-[17.4px] relative"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-border-radius-4 bg-color-tokens-action-outline-disbaled flex flex-row items-center justify-center py-[7px] px-[10.5px] gap-[7px] text-color-tokens-content-dark-primary">
            <input
              className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0"
              type="checkbox"
            />
            <div className="relative leading-[150%] font-medium">
              Add New Checklist
            </div>
            <Image
              className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
              width={14}
              height={14}
              alt=""
              src="/iconplus3.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-[120.3px] flex flex-col items-start justify-start gap-[7px]">
          <div className="relative leading-[150%] font-medium">Attachment</div>
          <div className="self-stretch rounded-9xs-5 border-color-tokens-content-dark-tertiary border-[0.9px] border-dashed box-border h-[92.4px] flex flex-col items-center justify-center py-[20.9px] px-[27.9px] gap-[7px] text-color-tokens-content-dark-tertiary">
            <input
              className="m-0 w-[27.9px] h-[27.9px] relative"
              type="checkbox"
            />
            <div className="relative leading-[150%]">
              Drag files here or Browse
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-9xs-5 bg-color-tokens-background-primary border-color-tokens-content-dark-tertiary border-[0.9px] border-solid flex flex-row items-center justify-start p-[10.5px] gap-[10.5px] text-color-tokens-content-dark-tertiary">
          <div className="w-[439px] relative leading-[150%] inline-block shrink-0">
            Add Your Comment
          </div>
          <input
            className="m-0 h-[17.4px] w-[17.4px] relative"
            type="checkbox"
          />
          <input
            className="m-0 h-[17.4px] w-[17.4px] relative"
            type="checkbox"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-3.5 text-3xs-6">
            <TextField
              property1="Default"
              showSuffix={false}
              showCaption={false}
              showIconRight={false}
              editSuffix="0/50"
              showValue
              editPlaceholder="Daily Sprint"
              showRightIcon={false}
              editCaption="We will notify the customer and issue a full refund"
              editLable="Activity"
              editSubtitle="Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)"
              showSubtitle={false}
              showLabel
              showPillars={false}
              showLeftIcon={false}
              showPrefix={false}
              iconArrowDown="/icon--arrow-down-1.svg"
              iconMagnifyingGlass1="/iconmagnifyingglass2.svg"
              iconSearch="/icon--search1.svg"
            />
            <div className="rounded-border-radius-4 bg-color-tokens-background-primary border-color-tokens-content-dark-primary border-[0.9px] border-solid flex flex-row items-center justify-center py-[7px] px-[10.5px] gap-[7px]">
              <Image
                className="w-3.5 relative h-3.5 hidden"
                width={14}
                height={14}
                alt=""
                src="/iconphone.svg"
              />
              <div className="relative leading-[14px] font-medium">
                Hide Activity Details
              </div>
              <Image
                className="w-3.5 relative h-3.5 hidden"
                width={14}
                height={14}
                alt=""
                src="/iconphone1.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-9xs-5 flex flex-row items-start justify-start gap-[10.5px]">
            <Image
              className="h-[27.9px] w-[27.9px] rounded-xl-9 object-cover"
              loading="lazy"
              width={28}
              height={28}
              alt=""
              src="/display-picture@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10.5px]">
              <div className="self-stretch relative">
                <span className="font-medium">{`Frank Edward `}</span>
                <span>{`mentioned you in a comment in `}</span>
                <span className="font-medium">Design Team Reports</span>
              </div>
              <div className="self-stretch rounded-9xs-5 bg-color-tokens-background-secondary flex flex-row items-center justify-center py-[7px] px-[10.5px]">
                <div className="flex-1 relative leading-[140%]">
                  <span className="font-medium">{`@brianf `}</span>
                  <span>
                    have you update this design so we can use it on next
                    meeting?
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[7px] text-2xs-5 text-color-tokens-content-dark-tertiary">
                <div className="relative leading-[140.02%]">3 hours ago</div>
                <Image
                  className="h-[10.5px] w-0 relative"
                  width
                  height={11}
                  alt=""
                  src="/security.svg"
                />
                <div className="relative leading-[140.02%]">Design Team</div>
              </div>
            </div>
            <Image
              className="h-[17.4px] w-[17.4px] relative"
              width={17}
              height={17}
              alt=""
              src="/icondotsthreevertical-6.svg"
            />
          </div>
          <div className="self-stretch rounded-9xs-5 flex flex-row items-start justify-start gap-[10.5px]">
            <Image
              className="h-[27.9px] w-[27.9px] rounded-xl-9 object-cover"
              loading="lazy"
              width={28}
              height={28}
              alt=""
              src="/display-picture-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10.5px]">
              <div className="self-stretch relative leading-[140%]">
                <span className="font-medium">{`James Wong `}</span>
                <span>{`Changed the due date of `}</span>
                <span className="font-medium">{`Monthly Team Meeting `}</span>
                <span>to Sep 12</span>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[7px] text-2xs-5 text-color-tokens-content-dark-tertiary">
                <div className="relative leading-[140.02%]">Aug 24</div>
                <Image
                  className="h-[10.5px] w-0 relative"
                  width
                  height={11}
                  alt=""
                  src="/vector-344-1.svg"
                />
                <div className="relative leading-[140.02%]">Design Team</div>
              </div>
            </div>
            <input
              className="m-0 h-[17.4px] w-[17.4px] relative"
              type="checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
