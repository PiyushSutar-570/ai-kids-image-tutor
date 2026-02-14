export function handleToolCalls(toolCalls) {
  if (!toolCalls || toolCalls.length === 0) return null;

  const tool = toolCalls[0];

  const functionName = tool.function.name;
  const args = JSON.parse(tool.function.arguments);

  if (functionName === "highlight_object") {
    return {
      action: "highlight",
      target: args.objectName
    };
  }

  if (functionName === "add_reward") {
    return {
      action: "reward",
      type: args.rewardType
    };
  }

  return null;
}