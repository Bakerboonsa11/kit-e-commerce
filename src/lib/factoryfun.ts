// lib/controllers/genericHandlers.ts (Next.js App Router Version)
import { Model } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import AppFeatures from '../lib/appFeatures';
// CREATE
export const createOne = <T>(Model: Model<T>) =>
  async (req: NextRequest) => {
    try {
      const body = await req.json();
      const createdInstance = await Model.create(body);

      return NextResponse.json({
        status: "success",
        message: "Data is created successfully",
        data: createdInstance
      }, { status: 201 });

    } catch (err) {
      return NextResponse.json({
        status: "fail",
        message: (err as Error).message
      }, { status: 500 });
    }
  };

// DELETE
export const deleteOne = <T>(Model: Model<T>) =>
  async (req: NextRequest, params: { id: string }) => {
    try {
      const { id } = params;
      const deletedInstance = await Model.findByIdAndDelete(id);

      if (!deletedInstance) {
        return NextResponse.json({
          status: "fail",
          message: "No document found with this ID"
        }, { status: 404 });
      }

      return NextResponse.json({
        status: "success",
        data: null,
        userdeletedis: (deletedInstance as any).name,
      });

    } catch (err) {
      return NextResponse.json({
        status: "fail",
        message: (err as Error).message
      }, { status: 500 });
    }
  };

// UPDATE
export const updateOne = <T>(Model: Model<T>) =>
  async (req: NextRequest, params: { id: string }) => {
    try {
      const body = await req.json();
      const { id } = params;

      const updatedInstance = await Model.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
      });

      if (!updatedInstance) {
        return NextResponse.json({
          status: "fail",
          message: "No document found with this ID to update"
        }, { status: 404 });
      }

      return NextResponse.json({
        status: "success",
        updatedTo: updatedInstance
      });

    } catch (err) {
      return NextResponse.json({
        status: "fail",
        message: (err as Error).message
      }, { status: 500 });
    }
  };

// GET ONE (by createdFor ID)
export const getOne = <T>(Model: Model<T>) =>
  async (_req: NextRequest, params: { id: string }) => {
    try {
      const { id } = params;
      const fetchedInstance = await Model.find({ createdFor: id });

      if (!fetchedInstance || fetchedInstance.length === 0) {
        return NextResponse.json({
          status: "fail",
          message: "No data found with this ID"
        }, { status: 404 });
      }

      return NextResponse.json({
        status: "success",
        data: fetchedInstance,
      });

    } catch (err) {
      return NextResponse.json({
        status: "fail",
        message: (err as Error).message
      }, { status: 500 });
    }
  };

// GET ALL (with filtering, sorting, etc. if AppFeatures is available)


export const getAll = <T>(Model: Model<T>) =>
  async (req: NextRequest) => {
    try {
      const url = new URL(req.url);
      const queryParams = Object.fromEntries(url.searchParams.entries());

      const features = new AppFeatures(Model.find(), queryParams)
        .filter()
        .sort()
        .fields()
        .pagination();

      const instanceFiltered = await features.databaseQuery;

      return NextResponse.json({
        status: "success",
        length: instanceFiltered.length,
        instanceFiltered
      });

    } catch (err) {
      return NextResponse.json({
        status: "fail",
        message: (err as Error).message
      }, { status: 500 });
    }
  };
